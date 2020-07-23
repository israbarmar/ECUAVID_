import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EtniaComponent } from './etnia/etnia.component';
import { ClaseSComponent } from './clase-s/clase-s.component';
import { RegionComponent } from './region/region.component';
import { GeneroComponent } from './genero/genero.component';
import {LoginComponent} from './login/login.component';
import {AddUserComponent} from './user/add-user/add-user.component';
import {ListUserComponent} from './user/list-user/list-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {VistaComponent} from './vista/vista.component';

const username = 'Usuario';

const ROUTES: Routes = [
    {path:'home', component:HomeComponent},
    {path:'etnia', component:EtniaComponent},
    {path:'clase-s', component:ClaseSComponent},
    {path:'region', component:RegionComponent},
    {path:'genero', component:GeneroComponent},
    {path:'login', component:LoginComponent},
    {path: 'add-user', component: AddUserComponent},
    {path: 'list-user', component: ListUserComponent},
    {path: 'edit-user', component: EditUserComponent},
    {path: 'vista', component: VistaComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'vista'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES); 
