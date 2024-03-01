import { Component, OnInit, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { SharedService } from 'src/app/shared.service';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { FullscreenService } from '../fullscreen.service';
import { TimeComponent } from '../components/microfunctions/time/time.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    // items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;
    // @ViewChild('menubutton', { static: false }) menuButton: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    @ViewChild('settingsMenu') settingsMenu: any;

    settings_items: MenuItem[] | undefined;

    constructor(public layoutService: LayoutService, private service: SharedService, private el: ElementRef, private fullscreenService: FullscreenService) { }


    currentDate$: Observable<Date>;
    private subscription: Subscription;

    ngOnDestroy() {
        // Unsubscribe from the observable to avoid memory leaks
        this.subscription.unsubscribe();
      }

      // Declare the currentDate property to hold the current date
      currentDate: Date;


    isFullscreen = false;

    toggleFullscreen(): void {
        this.fullscreenService.toggleFullscreen();
        this.isFullscreen = !this.isFullscreen;
    }

    @HostListener('document:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent): void {
    // Check if the active element is an input field
    const activeElement = document.activeElement;
    const isInputField = activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement;

    if (!isInputField) {
        // Execute your key handling logic only if not in an input field
        if (event.key === 'f') {
            this.toggleFullscreen();
        }

        if (event.key.toLowerCase() === 't' || event.code.toLowerCase() === 'keyt') {
            this.layoutService.onMenuToggle();
        }

        if (event.key.toLowerCase() === 'r' || event.code.toLowerCase() === 'keyr') {
            this.layoutService.onMenuToggle();
            this.toggleFullscreen();
        }
    }
}


    // toggleFullscreen() {
    //     const elem = this.el.nativeElement.querySelector('.layout-topbar');

    //     if (document.fullscreenElement) {
    //       document.exitFullscreen();
    //     } else {
    //       elem.requestFullscreen();
    //     }
    //   }


    databaseStatus: string = '';
    databaseSubscription: Subscription | undefined;


    model: any[] = [];

    ngOnInit(): void {
        this.checkDatabaseConnection();

        this.model = [
            {
                label: 'Options',
                items: [
                    { label: 'Config', icon: 'pi pi-fw pi-home', routerLink: ['/Config'] }
                ]
            }
        ];

        this.settings_items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        routerLink: ['/config']

                    }
                ]
            }
        ];
    }

    checkDatabaseConnection() {
        this.databaseSubscription = this.service.getDatabaseStatus().subscribe({
          next: (response: any) => {
            // Set the database status message based on the response
            this.databaseStatus = response.message;
          },
          error: (error: any) => {
            // Set an error message if the database connection check fails
            this.databaseStatus = 'Database connection error: ' + error.error.message;
          }
        });

        // Create an observable that emits the current date every second
      this.currentDate$ = interval(1000).pipe(
        // Use the map operator to transform the emitted value to the current date
        map(() => new Date())
      );

      // Subscribe to the observable and update the current date property
      this.subscription = this.currentDate$.subscribe(date => {
        this.currentDate = date;
      });

    }
}
