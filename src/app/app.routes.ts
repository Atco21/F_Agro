import { Routes } from '@angular/router';
import { DashboardComponent } from './components/j_campo/dashboard/dashboard.component';
import { AddTareaComponent } from './components/j_campo/add-tarea/add-tarea.component';
import { NotificacionesComponent } from './components/j_campo/notificaciones/notificaciones.component';
import { CalendarioComponent } from './components/j_campo/calendario/calendario.component';
import { IncidenciasComponent } from './components/j_campo/incidencias/incidencias.component';
import { OrdenComponent } from './components/j_campo/orden/orden.component';
import { MenuComponent } from './components/j_campo/menu/menu.component';

export const routes: Routes =
[  {path:'',component:DashboardComponent} ,
   {path:'add-tarea',component:AddTareaComponent},
   {path:'notificaciones',component:NotificacionesComponent},
   {path: 'calendario',component: CalendarioComponent},
   {path:'incidencia',component:IncidenciasComponent},
   {path:'orden',component:OrdenComponent},
   {path:'menu',component:MenuComponent}
];

