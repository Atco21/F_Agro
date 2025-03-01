import { NgModule } from '@angular/core';//Ng sirve paraque funcionen las importaciones de padre a hijo y viceversa
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/j_campo/dashboard/dashboard.component';
import { NotificacionesComponent } from './components/j_campo/notificaciones/notificaciones.component';
import { CalendarioComponent } from './components/j_campo/calendario/calendario.component';
import { IncidenciasComponent } from './components/j_campo/incidencias/incidencias.component';
import { MenuComponent } from './components/j_campo/menu/menu.component';
import { ModalCrearParcelaComponent } from './components/j_campo/modals/modal-crear-parcela/modal-crear-parcela.component';
import { ModalCrearTratamientoComponent } from './components/j_campo/modals/modal-crear-tratamiento/modal-crear-tratamiento.component';
import {ModalCrearTareaComponent} from './components/j_campo/modals/modal-crear-tarea/modal-crear-tarea.component';
import { CrearOrdenComponent} from './components/j_campo/modals/crear orden/crear-orden.component';
import { TipoPersonalComponent } from './components/j_campo/incidencias/tipos/tipo-personal/tipo-personal.component';
import { TipoMaquinaComponent } from './components/j_campo/incidencias/tipos/tipo-maquina/tipo-maquina.component';
import { TipoStockComponent } from './components/j_campo/incidencias/tipos/tipo-stock/tipo-stock.component';
import { OrdenEnCursoComponent } from './components/j_campo/orden/orden-curso/orden-en-curso.component';
import { OrdenPausadasComponent } from './components/j_campo/orden/orden-pausadas/orden-pausadas.component';
import { OrdenPendientesComponent } from './components/j_campo/orden/orden-pendientes/orden-pendientes.component';
import { OrdenTerminadasComponent } from './components/j_campo/orden/orden-terminadas/orden-terminadas.component';
import { OrdenNoFinalizadaComponent } from './components/movil/orden/orden-no-finalizada/orden-no-finalizada.component';
import { OrdenFinalizadaComponent } from './components/movil/orden/orden-finalizada/orden-finalizada.component';
import { CrearIncidenciaComponent } from './components/movil/incidencias/crear-incidencia/crear-incidencia.component';
import { CrearIncidenciaMaquinaComponent } from './components/movil/incidencias/crear-incidencia/crear-incidencia-maquina/crear-incidencia-maquina.component';
import { QuimicosComponent } from './components/movil/quimicos/quimicos.component';
import { PedidoComponent } from './components/movil/pedido/pedido.component';
import { AuthGuard } from './guards/auth.guard';
import { JefeGuard } from './guards/guard-jefe.guards';
import { AplicadorGuard } from './guards/guard-aplicador.guards';
import  LoginComponent  from './components/login/login.component'

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'incidencias', component: IncidenciasComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'crear orden', component: CrearOrdenComponent }, // routa de home crear tarea
  {path:'modal-crear-parcela', component: ModalCrearParcelaComponent},
  {path:'modal-crear-tratamiento', component: ModalCrearTratamientoComponent},
  {path:'modal-crear-tarea', component: ModalCrearTareaComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'modal-crear-tratamiento', component:CrearOrdenComponent},
  {path:"incidencias/tipo-personal", component:TipoPersonalComponent},//tabla incidencias tipo personal
  {path:"incidencias/tipo-maquina", component:TipoMaquinaComponent},//incedncias tipo maquina
  {path:"incidencias/tipo-stock",component:TipoStockComponent}, //incidencias tipo stock
  {path:"orden/orden-curso", component:OrdenEnCursoComponent},  //ruta de orden
  {path:"orden/orden-pausadas",component:OrdenPausadasComponent},
  {path:"orden/orden-pendientes",component:OrdenPendientesComponent},
  {path:"orden/orden-terminadas",component:OrdenTerminadasComponent},


];


export class AppRoutingModule {}
