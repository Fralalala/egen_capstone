import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRecordRowComponent } from './patient-record-row.component';

describe('PatientRecordRowComponent', () => {
  let component: PatientRecordRowComponent;
  let fixture: ComponentFixture<PatientRecordRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRecordRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRecordRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
