import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReportComponent } from './daily-report.component';

describe('DailyReportComponent', () => {
  let component: DailyReportComponent;
  let fixture: ComponentFixture<DailyReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyReportComponent]
    });
    fixture = TestBed.createComponent(DailyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
