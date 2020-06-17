import { Routes, RouterModule } from '@angular/router';
import { CuentaComponent } from './cuenta/cuenta.component';
import { HomeComponent } from './home/home.component';
import { EtniaComponent } from './etnia/etnia.component';
import { ClaseSComponent } from './clase-s/clase-s.component';
import { RegionComponent } from './region/region.component';
import { GeneroComponent } from './genero/genero.component';



const ROUTES: Routes = [
    {path:'home', component:HomeComponent},
    {path:'cuenta', component:CuentaComponent},
    {path:'etnia', component:EtniaComponent},
    {path:'clase-s', component:ClaseSComponent},
    {path:'region', component:RegionComponent},
    {path:'genero', component:GeneroComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES); 
