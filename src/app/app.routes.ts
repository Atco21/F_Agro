import { Routes } from '@angular/router';
import { CalendarioComponent } from './components/movil/calendario/calendario.component';
import { DashboardComponent } from './components/movil/dashboard/dashboard.component';
import { AddTareaComponent } from './components/movil/add-tarea/add-tarea.component';
import { NotificacionesComponent } from './components/movil/notificaciones/notificaciones.component';

export const routes: Routes =
[  {path:'',component:DashboardComponent} ,
   { path: 'calendario',component: CalendarioComponent},
   {path:'add-tarea',component:AddTareaComponent},
  //  {path:'notificaciones'},{component:NotificacionesComponent}
];

