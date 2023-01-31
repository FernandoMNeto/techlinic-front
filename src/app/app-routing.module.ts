import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './components/consult/consult.component';
import { DoctorComponent } from './components/doctor-components/doctor/doctor.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PacientComponent } from './components/pacients-components/pacient/pacient.component';
import { RecordPacientComponent } from './components/pacients-components/record-pacient/record-pacient.component';
import { RegisterPacientComponent } from './components/pacients-components/register-pacient/register-pacient.component';
import { RelatorysComponent } from './components/relatorys/relatorys.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { AutheticationGuard } from './guards/authetication.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AutheticationGuard] },
  { path: 'schedules', component: SchedulesComponent, canActivate: [AutheticationGuard] },
  { path: 'doctor', component: DoctorComponent, canActivate: [AutheticationGuard] },
  { path: 'pacient', component: PacientComponent, canActivate: [AutheticationGuard] },
  { path: 'consults', component: ConsultComponent, canActivate: [AutheticationGuard] },
  { path: 'relatorys', component: RelatorysComponent, canActivate: [AutheticationGuard] },
  { path: 'register-pacient', component: RegisterPacientComponent, canActivate: [AutheticationGuard] },
  { path: 'record/:id', component: RecordPacientComponent, canActivate: [AutheticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AutheticationGuard]
})
export class AppRoutingModule { }
