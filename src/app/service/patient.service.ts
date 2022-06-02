import { Injectable } from '@angular/core';
import { Patient } from 'src/types/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor() {}

  patients: Patient[] = [];

  addPatient(newPatient: Patient) {
    this.patients = [...this.patients, newPatient];
  }
}
