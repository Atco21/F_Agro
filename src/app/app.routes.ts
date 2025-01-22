import { Routes } from '@angular/router';
import { DashboardComponent } from './components/movil/dashboard/dashboard.component';
import { AddTareaComponent } from './components/movil/add-tarea/add-tarea.component';
import { NotificacionesComponent } from './components/movil/notificaciones/notificaciones.component';
import { CalendarioComponent } from './components/movil/calendario/calendario.component';
import { IncidenciasComponent } from './components/movil/incidencias/incidencias.component';
import { OrdenComponent } from './components/movil/orden/orden.component';
import { MenuComponent } from './components/movil/menu/menu.component';

export const routes: Routes =
[  {path:'',component:DashboardComponent} ,
   {path:'add-tarea',component:AddTareaComponent},
   {path:'notificaciones',component:NotificacionesComponent},
   {path: 'calendario',component: CalendarioComponent},
   {path:'incidencia',component:IncidenciasComponent},
   {path:'orden',component:OrdenComponent},
   {path:'menu',component:MenuComponent}
];

