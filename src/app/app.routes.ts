import { Routes, RouterModule } from '@angular/router';
import { CuentaComponent } from './cuenta/cuenta.component';
import { HomeComponent } from './home/home.component';



const ROUTES: Routes = [
    {path: 'home', component:HomeComponent},
    {path:'cuenta', component:CuentaComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES); 
