import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptor } from './interceptors/interceptor';
import { AccountService } from './services/account.service';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ToastService } from './services/toast.service';
import { ToastComponent } from './shared/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    AccountService,
    ToastService
    //{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
