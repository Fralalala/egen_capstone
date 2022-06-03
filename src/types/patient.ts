import { Status } from 'src/enums/patientEnums';

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  language: string;
  sex: number;
}

export interface PatientRecord {
  patientId: number;
  title: string;
  consultDate: string;
  symptom: string;
  diagnosis: string;
  treatments: string[];
  status: Status;
}
