import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientDialogueComponent } from './new-patient-dialogue.component';

describe('NewPatientDialogueComponent', () => {
  let component: NewPatientDialogueComponent;
  let fixture: ComponentFixture<NewPatientDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPatientDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatientDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
