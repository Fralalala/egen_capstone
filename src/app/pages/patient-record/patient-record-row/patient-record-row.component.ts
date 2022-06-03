import { Component, Input, OnInit } from '@angular/core';
import { PatientRecord } from 'src/types/patient';

@Component({
  selector: 'app-patient-record-row',
  templateUrl: './patient-record-row.component.html',
  styleUrls: ['./patient-record-row.component.css']
})
export class PatientRecordRowComponent implements OnInit {

  @Input() patientRecord?: PatientRecord;

  constructor() { }

  ngOnInit(): void {
  }

  

}
