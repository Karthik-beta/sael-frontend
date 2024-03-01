import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeeComponent } from './oee.component';

describe('OeeComponent', () => {
  let component: OeeComponent;
  let fixture: ComponentFixture<OeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OeeComponent]
    });
    fixture = TestBed.createComponent(OeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
