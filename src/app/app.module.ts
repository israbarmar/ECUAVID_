import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { HomeComponent } from './home/home.component';

import { APP_ROUTING } from './app.routes';
import { EtniaComponent } from './etnia/etnia.component';
import { ClaseSComponent } from './clase-s/clase-s.component';
import { RegionComponent } from './region/region.component';
import { GeneroComponent } from './genero/genero.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    HomeComponent,
    EtniaComponent,
    ClaseSComponent,
    RegionComponent,
    GeneroComponent,
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
