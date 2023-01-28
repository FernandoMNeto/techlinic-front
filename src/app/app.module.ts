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
import { DoctorComponent } from './components/doctor/doctor.component';
import { NgToastModule } from 'ng-angular-popup';
import { ConsultComponent } from './components/consult/consult.component';
import { RelatorysComponent } from './components/relatorys/relatorys.component';
import { RegisterPacientComponent } from './components/pacients-components/register-pacient/register-pacient.component';
import { PacientComponent } from './components/pacients-components/pacient/pacient.component';
import { AutheticationGuard } from './guards/authetication.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NgxMaskModule } from 'ngx-mask';

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
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule, 
    NgxMaskModule.forRoot()
  ],
  providers: [
    AutheticationGuard,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
