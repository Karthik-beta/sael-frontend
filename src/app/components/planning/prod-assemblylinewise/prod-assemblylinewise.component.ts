import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-prod-assemblylinewise',
  templateUrl: './prod-assemblylinewise.component.html',
  styleUrls: ['./prod-assemblylinewise.component.scss']
})
export class ProdAssemblylinewiseComponent implements OnInit {

    constructor(private service:SharedService) {}


    rows: number = 10;
    currentPage: number = 1;
    totalRecords: number = 0;
    text: string = '';
    results: any[] = [];
    rowsPerPageOptions: number[] = [10, 20, 30];

    AssemblylineWiseData: any[] = [];
    items: MenuItem[] = [];

    stagesArray: any[] = [];
    display: boolean = false;


    loading: boolean = false;

    plant: any;
    shopfloor: any;
    assembly_line: any;
    machine_id: any;
    barChart: any;

    barOptions: any;


    stateOptions: any[] = [
        { label: 'Show', value: 'true' },
        { label: 'Hide', value: 'false' }
    ];

    showElements: string = 'true';

    ngOnInit(): void {
        this.initCharts();
        this.loadAssemblyLineWiseData();

        this.plant = [
            { name: 'CHENNAI' },
          ],
          this.shopfloor = [
            { name: 'XYZ' },
          ],
          this.assembly_line = [
            { name: 'TSE' },
          ],
          this.machine_id= [
            { name: 'TSE-001' },
            { name: 'TSE-002' },
            { name: 'TSE-003' },
          ]

        this.items = [
            { label: 'Import', icon: 'fas fa-file-import' },
            { label: 'Export', icon: 'fas fa-download' },
        ];
    }

    dummyList: any[] = [
        {
            plant: 'Ferozepur',
            shopfloor: 'Module Line-1',
            assembly_line: 'NA',
            machine_id: 'SG05-250T',
            product_id: 'AQUA 1000ml',
            date: '',
            mc_on_hours: 1320,
            mc_idle_hours: 0,
            actual: 0,
            target: 1440,
            performance: 100,
        },
        // {
        //     plant: 'CHENNAI',
        //     shopfloor: 'XYZ',
        //     assembly_line: 'TSE',
        //     machine_id: 'TSE-002',
        //     product_id: 'CASSEROLES',
        //     date: '01-10-2023',
        //     mc_on_hours: 1440,
        //     mc_idle_hours: 0,
        //     actual: 1354,
        //     target: 1440,
        //     performance: 94,
        // },
        // {
        //     plant: 'CHENNAI',
        //     shopfloor: 'XYZ',
        //     assembly_line: 'TSE',
        //     machine_id: 'TSE-003',
        //     product_id: 'CASSEROLES',
        //     date: '01-10-2023',
        //     mc_on_hours: 1400,
        //     mc_idle_hours: 76,
        //     actual: 1324,
        //     target: 1440,
        //     performance: 86,
        // }
    ];

    // getBackgroundColorStyle(performance: number): any {
    //     let backgroundColor = '';

    //     if (performance > 90) {
    //       backgroundColor = 'green';
    //     } else if (performance >= 80 && performance <= 90) {
    //       backgroundColor = 'yellow';
    //     } else if (performance < 80) {
    //       backgroundColor = 'red';
    //     }

    //     return {'background-color': backgroundColor };
    //   }

    getBackgroundColorStyle(performance: number): any {
        let backgroundColor = '';

        if (performance > 90) {
          backgroundColor = 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), green)';
        } else if (performance >= 80 && performance <= 90) {
          backgroundColor = 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), yellow)';
        } else if (performance < 80) {
          backgroundColor = 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), red)';
        }

        return { 'background': backgroundColor };
      }



      initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.barChart = {
            labels: [''],
            datasets: [
                {
                    label: 'Running',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    data: [65]
                },
                {
                    label: 'Breakdown',
                    backgroundColor: documentStyle.getPropertyValue('--red-400'),
                    borderColor: documentStyle.getPropertyValue('--red-400'),
                    data: [35]
                }
            ]
        };

        this.barOptions = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 3.5,
            plugins: {
                legend: {
                    // display: false,
                    labels: {
                        color: textColor
                    },
                datalabels: {
                    display: true,
                    color: textColor
                }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }


    id: any;
    product_id: any;
    date_production: any;


    loadAssemblyLineWiseData() {
        this.service.getAssemblyLineWiseData().subscribe(data=>{
        this.AssemblylineWiseData=data;

        // Individual
        this.id = this.AssemblylineWiseData[0].id;
        this.plant = this.AssemblylineWiseData[0].plant;
        this.shopfloor = this.AssemblylineWiseData[0].shopfloor;
        this.assembly_line = this.AssemblylineWiseData[0].assembly_line;
        this.machine_id = this.AssemblylineWiseData[0].machine_id;
        this.product_id = this.AssemblylineWiseData[0].product_id;
        this.date_production = this.AssemblylineWiseData[0].date_production;
      });
    }

    getShift(): string {
        const currentDateTime = new Date();
        const currentHour = currentDateTime.getHours();

        // Check if the current hour is between 8 and 20 (8:00 AM to 8:00 PM)
        if (currentHour >= 8 && currentHour < 20) {
          return 'Shift A, 07 - 19 (10)';
        } else {
          return 'Shift B, 19 - 07 (10)';
        }
    }

    currentShift = this.getShift();

    editClick(item: any) {
        this.display = true;
        console.log("item data", item);
    }



    mc_on_hours: number=0;
    mc_idle_hours: number=0;
    actual: number=0;
    target: number=0;
    performance: number=0;
    gap: number=0;
    kWh: number=0;



}
