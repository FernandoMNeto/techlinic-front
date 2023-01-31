import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { DoctorComponent } from './components/doctor-components/doctor/doctor.component';
import { NgToastModule } from 'ng-angular-popup';
import { ConsultComponent } from './components/consult/consult.component';
import { RelatorysComponent } from './components/relatorys/relatorys.component';
import { RegisterPatientComponent } from './components/patients-components/register-patient/register-patient.component';
import { PatientComponent } from './components/patients-components/patient/patient.component';
import { AutheticationGuard } from './guards/authetication.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NgxMaskModule } from 'ngx-mask';
import { FindPatientComponent } from './components/patients-components/find-patient/find-patient.component';
import { RecordPatientComponent } from './components/patients-components/record-patient/record-patient.component';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatModule } from './modules/mat/mat.module';
import { SearchPatientComponent } from './components/dialogs/search-patient/search-patient.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    SchedulesComponent,
    DoctorComponent,
    PatientComponent,
    ConsultComponent,
    RelatorysComponent,
    RegisterPatientComponent,
    RegisterPatientComponent,
    FindPatientComponent,
    RecordPatientComponent,
    ConfirmationDialogComponent,
    SearchPatientComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule, 
    NgxMaskModule.forRoot(),
    MatModule,
  ],
  providers: [
    AutheticationGuard,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
