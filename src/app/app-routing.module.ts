import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuentaComponent } from './components/cuenta/cuenta.component';


const routes: Routes = [
  { path: 'Cuenta', component:CuentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
