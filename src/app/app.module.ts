import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { HomeComponent } from './home/home.component';

import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
