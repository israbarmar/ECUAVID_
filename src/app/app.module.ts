import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTING } from './app.routes';
import { EtniaComponent } from './etnia/etnia.component';
import { ClaseSComponent } from './clase-s/clase-s.component';
import { RegionComponent } from './region/region.component';
import { GeneroComponent } from './genero/genero.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './service/api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './core/interceptor';
import {VistaComponent} from './vista/vista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EtniaComponent,
    ClaseSComponent,
    RegionComponent,
    GeneroComponent,
    ListUserComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }