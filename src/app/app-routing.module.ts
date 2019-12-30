import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AhorroComponent } from './products/ahorro/ahorro.component';
import { CrearCuentaComponent } from './products/ahorro/crear-cuenta.component';
const routes: Routes = [
  { path: '', redirectTo: '/ahorro', pathMatch: 'full' },
  //routing para consulta de cuentas de ahorro
  { path: 'ahorro', component: AhorroComponent },
  //routing para crear registro
  { path: 'ahorro/crearCuenta', component: CrearCuentaComponent},
  //routing para modificar registro
  { path: 'ahorro/crearCuenta/:id', component: CrearCuentaComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
