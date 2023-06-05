import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './components/consult/consult.component';
import { DoctorComponent } from './components/doctor-components/doctor/doctor.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AllPatientsComponent } from './components/patients-components/all-patients/all-patients.component';
import { PatientComponent } from './components/patients-components/patient/patient.component';
import { RecordPatientComponent } from './components/patients-components/record-patient/record-patient.component';
import { RegisterPatientComponent } from './components/patients-components/register-patient/register-patient.component';
import { RelatorysComponent } from './components/relatorys/relatorys.component';
import { SchedulesComponent } from './components/schedule-components/schedules/schedules.component';
import { AutheticationGuard } from './guards/authetication.guard';
import { NewScheduleComponent } from './components/schedule-components/new-schedule/new-schedule.component';
import { RegisterDoctorComponent } from './components/doctor-components/register-doctor/register-doctor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AutheticationGuard] },
  { path: 'schedules', component: SchedulesComponent, canActivate: [AutheticationGuard] },
  { path: 'doctor', component: DoctorComponent, canActivate: [AutheticationGuard] },
  { path: 'patient', component: PatientComponent, canActivate: [AutheticationGuard] },
  { path: 'consults', component: ConsultComponent, canActivate: [AutheticationGuard] },
  { path: 'relatorys', component: RelatorysComponent, canActivate: [AutheticationGuard] },
  { path: 'register-patient', component: RegisterPatientComponent, canActivate: [AutheticationGuard] },
  { path: 'record/:id', component: RecordPatientComponent, canActivate: [AutheticationGuard] },
  { path: 'all-patients', component: AllPatientsComponent, canActivate: [AutheticationGuard] },
  { path: 'new-schedule', component: NewScheduleComponent, canActivate: [AutheticationGuard] },
  { path: 'register-doctor', component: RegisterDoctorComponent, canActivate: [AutheticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AutheticationGuard]
})
export class AppRoutingModule { }
