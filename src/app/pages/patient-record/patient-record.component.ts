import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';
import { Status } from 'src/enums/patientEnums';
import { Patient, PatientRecord } from 'src/types/patient';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css'],
})
export class PatientRecordComponent implements OnInit {
  currentPatient: Patient | null;
  currentPatientRecord: PatientRecord | null;
  currentStatus?: Status;

  constructor(public patientService: PatientService, private router: Router) {
    this.currentPatient = null;
    this.currentPatientRecord = null;
  }

  ngOnInit(): void {
    const currentPatient =
      this.patientService.patients[this.router.url.split('/')[2]] || null;

    this.currentPatient = currentPatient;
  }

  setCurrentPatientRecord(patientRecord: PatientRecord) {
    this.currentPatientRecord = patientRecord;
    this.currentStatus = patientRecord.status;
}

  toPatientList() {
    this.router.navigate(['/']);
  }
}
