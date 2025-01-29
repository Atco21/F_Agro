// import { Routes } from '@angular/router';
// import { DashboardComponent } from './components/j_campo/dashboard/dashboard.component';
// import { NotificacionesComponent } from './components/j_campo/notificaciones/notificaciones.component';
// import { CalendarioComponent } from './components/j_campo/calendario/calendario.component';
// import { IncidenciasComponent } from './components/j_campo/incidencias/incidencias.component';
// import { OrdenComponent } from './components/j_campo/orden/orden.component';
// import { MenuComponent } from './components/j_campo/menu/menu.component';
// import { ModalCrearDTareaComponent } from './components/j_campo/modals/modal-crear-dtarea/modal-crear-dtarea.component';
// import { ModalCrearTareaComponent } from './components/j_campo/modals/crear orden/crear-orden.component';
// import { ModalCrearParcelaComponent } from './components/j_campo/modals/modal-crear-parcela/modal-crear-parcela.component';
// import { ModalCrearTratamientoComponent } from './components/j_campo/modals/modal-crear-tratamiento/modal-crear-tratamiento.component';

// export const routes: Routes =
// [  {
//     path:'',component:DashboardComponent,
//     children:[





// ]
// },

// {path:'incidencias',component:DashboardComponent},
// {path:'notificaciones',component:NotificacionesComponent},
// {path: 'calendario',component: CalendarioComponent},
// {path:'header',component:ModalCrearTareaComponent},
// {path:'orden',component:OrdenComponent},
// {path:'menu',component:MenuComponent},
// {path:'modalcreardtarea',component:ModalCrearDTareaComponent},
// {
//   path:'crearOrden',
//   component:ModalCrearTareaComponent,
//   children:[
//   {
//     path:'',
//     component:ModalCrearDTareaComponent,

//   },
//   {
//     path:'parcela',
//     component: ModalCrearTratamientoComponent,

//   },

// ]
// },

// ]
// ;

import { Routes } from '@angular/router';
import { DashboardComponent } from './components/j_campo/dashboard/dashboard.component';
import { NotificacionesComponent } from './components/j_campo/notificaciones/notificaciones.component';
import { CalendarioComponent } from './components/j_campo/calendario/calendario.component';
import { IncidenciasComponent } from './components/j_campo/incidencias/incidencias.component';
import { OrdenComponent } from './components/j_campo/orden/orden.component';
import { MenuComponent } from './components/j_campo/menu/menu.component';
import { ModalCrearTareaComponent } from './components/j_campo/modals/crear orden/crear-orden.component';
import { ModalCrearParcelaComponent } from './components/j_campo/modals/modal-crear-parcela/modal-crear-parcela.component';
import { ModalCrearTratamientoComponent } from './components/j_campo/modals/modal-crear-tratamiento/modal-crear-tratamiento.component';
import{ModalCrearDTareaComponent} from './components/j_campo/modals/modal-crear-dtarea/modal-crear-dtarea.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'incidencias', component: IncidenciasComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'orden', component: OrdenComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'crear-orden', component: ModalCrearTareaComponent }, // routa de home crear tarea
  {path:'modal-crear-parcela', component: ModalCrearParcelaComponent},
  {path:'modal-crear-tratamiento', component: ModalCrearTratamientoComponent},
  {path:'modal-crear-dtarea', component: ModalCrearDTareaComponent}


];
