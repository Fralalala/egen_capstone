import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewPatientDialogueComponent } from 'src/app/new-patient-dialogue/new-patient-dialogue.component';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public patientService: PatientService,
    private route: Router
  ) {}

  toPatientRecord(id: number) {
    this.route.navigate([`/patient/${id}/records`]); // navigate to other page
  }

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(NewPatientDialogueComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
