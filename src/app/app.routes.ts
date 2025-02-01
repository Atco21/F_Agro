import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './components/j_campo/dashboard/dashboard.component';
import { NotificacionesComponent } from './components/j_campo/notificaciones/notificaciones.component';
import { CalendarioComponent } from './components/j_campo/calendario/calendario.component';
import { IncidenciasComponent } from './components/j_campo/incidencias/incidencias.component';
import { MenuComponent } from './components/j_campo/menu/menu.component';
import { ModalCrearParcelaComponent } from './components/j_campo/modals/modal-crear-parcela/modal-crear-parcela.component';
import { ModalCrearTratamientoComponent } from './components/j_campo/modals/modal-crear-tratamiento/modal-crear-tratamiento.component';
import {ModalCrearDTareaComponent} from './components/j_campo/modals/modal-crear-dtarea/modal-crear-dtarea.component';
import { CrearOrdenComponent} from './components/j_campo/modals/crear orden/crear-orden.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'incidencias', component: IncidenciasComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'crear orden', component: CrearOrdenComponent }, // routa de home crear tarea
  {path:'modal-crear-parcela', component: ModalCrearParcelaComponent},
  {path:'modal-crear-tratamiento', component: ModalCrearTratamientoComponent},
  {path:'modal-crear-dtarea', component: ModalCrearDTareaComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'modal-crear-tratamiento', component:CrearOrdenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
