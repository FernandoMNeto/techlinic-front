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
import { RegisterPacientComponent } from './components/pacients-components/register-pacient/register-pacient.component';
import { PacientComponent } from './components/pacients-components/pacient/pacient.component';
import { AutheticationGuard } from './guards/authetication.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NgxMaskModule } from 'ngx-mask';
import { FindPacientComponent } from './components/pacients-components/find-pacient/find-pacient.component';
import { RecordPacientComponent } from './components/pacients-components/record-pacient/record-pacient.component';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatModule } from './modules/mat/mat.module';
import { SearchPacientComponent } from './components/dialogs/search-pacient/search-pacient.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    SchedulesComponent,
    DoctorComponent,
    PacientComponent,
    ConsultComponent,
    RelatorysComponent,
    RegisterPacientComponent,
    RegisterPacientComponent,
    FindPacientComponent,
    RecordPacientComponent,
    ConfirmationDialogComponent,
    SearchPacientComponent,
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
