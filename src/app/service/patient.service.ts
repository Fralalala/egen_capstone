import { Injectable } from '@angular/core';
import { Status } from 'src/enums/patientEnums';
import { Patient, PatientRecord } from 'src/types/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor() {}

  patients: { [key: string]: Patient } = {
    123: {
      id: 123,
      firstName: 'rj',
      lastName: 'morales',
      birthDate: new Date().toLocaleString(),
      country: 'philippines',
      language: 'tagalog',
      sex: 1,
    },
  };
  patientRecords: { [key: number]: PatientRecord[] } = {
    123: [
      {
        title: 'Alcoholism',
        consultDate: new Date().toLocaleString(),
        patientId: 123,
        symptom: 'Is getting tired long sentence',
        diagnosis: 'Dying',
        treatments: ['Gave Antibiotics', 'Executed Surgery'],
        status: Status.TREATED,
      },
    ],
  };

  getPatientArray() {
    return Object.values(this.patients);
  }

  getPatientRecords(id?: number) {
    if (!id) return [];
    return this.patientRecords[id];
  }

  addPatient(newPatient: Patient) {
    const newPatients = { ...this.patients };
    newPatients[newPatient.id] = newPatient;
    this.patients = newPatients;
  }

  addPatientRecord(newPatientRecord: PatientRecord) {
    const newPatientRecords = { ...this.patientRecords };
    let keyReference = newPatientRecords[newPatientRecord.patientId];

    if (!keyReference) keyReference = newPatientRecords[newPatientRecord.patientId] = [];

    keyReference.push(newPatientRecord);

    this.patientRecords = newPatientRecords;
  }

  getStatusOptions() {
    console.log(Object.values(Status));
    return Object.values(Status);
  }
}
