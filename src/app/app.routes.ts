import { Routes } from '@angular/router';
import { DashboardComponent } from './components/j_campo/dashboard/dashboard.component';
// import { TareaModalComponent } from './components/j_campo/modals/modal-crear-parcela";
import { NotificacionesComponent } from './components/j_campo/notificaciones/notificaciones.component';
import { CalendarioComponent } from './components/j_campo/calendario/calendario.component';
import { IncidenciasComponent } from './components/j_campo/incidencias/incidencias.component';
import { OrdenComponent } from './components/j_campo/orden/orden.component';
import { MenuComponent } from './components/j_campo/menu/menu.component';

export const routes: Routes =
[  {path:'',component:DashboardComponent} ,
  //  {path:'add-tarea',component: TareaModalComponent},
   {path:'notificaciones',component:NotificacionesComponent},
   {path: 'calendario',component: CalendarioComponent},
   {path:'incidencia',component:IncidenciasComponent},
   {path:'orden',component:OrdenComponent},
   {path:'menu',component:MenuComponent}
];

