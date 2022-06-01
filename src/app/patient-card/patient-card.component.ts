import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {

  @Input() patientName: string
  @Input() gender: string
  @Input() date: string

  constructor() { 
    this.patientName= 'Sample Name'
    this.gender= 'Sample Name'
    this.date= 'Sample Name'

  }

  ngOnInit(): void {
  }

}
