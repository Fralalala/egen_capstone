import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routers/app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewPatientDialogueComponent } from './new-patient-dialogue/new-patient-dialogue.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { PatientRecordComponent } from './pages/patient-record/patient-record.component';
import { PatientRecordRowComponent } from './pages/patient-record/patient-record-row/patient-record-row.component';
import { AddPatientRecordComponent } from './pages/patient-record/add-patient-record/add-patient-record.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    HomeComponent,
    PatientCardComponent,
    NewPatientDialogueComponent,
    PatientRecordComponent,
    PatientRecordRowComponent,
    AddPatientRecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
