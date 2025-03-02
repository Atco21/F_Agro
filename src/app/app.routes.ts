import { Routes} from '@angular/router';
import { DashboardComponent } from './components/j_campo/dashboard/dashboard.component';
import { NotificacionesComponent } from './components/j_campo/notificaciones/notificaciones.component';
import { CalendarioComponent } from './components/j_campo/calendario/calendario.component';
import { IncidenciasComponent } from './components/j_campo/incidencias/incidencias.component';
import { MenuComponent } from './components/j_campo/menu/menu.component';
import { ModalCrearParcelaComponent } from './components/j_campo/modals/modal-crear-parcela/modal-crear-parcela.component';
import { ModalCrearTratamientoComponent } from './components/j_campo/modals/modal-crear-tratamiento/modal-crear-tratamiento.component';
import { ModalCrearTareaComponent} from './components/j_campo/modals/modal-crear-tarea/modal-crear-tarea.component';
import { CrearOrdenComponent} from './components/j_campo/modals/crear orden/crear-orden.component';
import { TipoPersonalComponent } from './components/j_campo/incidencias/tipos/tipo-personal/tipo-personal.component';
import { TipoMaquinaComponent } from './components/j_campo/incidencias/tipos/tipo-maquina/tipo-maquina.component';
import { TipoStockComponent } from './components/j_campo/incidencias/tipos/tipo-stock/tipo-stock.component';
import { OrdenEnCursoComponent } from './components/j_campo/orden/orden-curso/orden-en-curso.component';
import { OrdenPausadasComponent } from './components/j_campo/orden/orden-pausadas/orden-pausadas.component';
import { OrdenPendientesComponent } from './components/j_campo/orden/orden-pendientes/orden-pendientes.component';
import { OrdenTerminadasComponent } from './components/j_campo/orden/orden-terminadas/orden-terminadas.component';


export const routes: Routes = [
  { path: '', component: DashboardComponent },

  {
    path: "incidencias",
    children: [
      { path: "tipo-personal", component: TipoPersonalComponent }, // Tabla incidencias tipo personal
      { path: "tipo-maquina", component: TipoMaquinaComponent },   // Incidencias tipo máquina
      { path: "tipo-stock", component: TipoStockComponent }        // Incidencias tipo stock
    ]
  },
  {
    path: "orden",
    children: [
      {path: "orden-curso", component: OrdenEnCursoComponent},
      {path: "orden-pausadas", component: OrdenPausadasComponent},
      {path: "orden-pendientes", component: OrdenPendientesComponent}
    ]
  },
  
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'crear orden', component: CrearOrdenComponent }, // routa de home crear tarea
  {path:'modal-crear-parcela', component: ModalCrearParcelaComponent},
  {path:'modal-crear-tratamiento', component: ModalCrearTratamientoComponent},
  {path:'modal-crear-tarea', component: ModalCrearTareaComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'modal-crear-tratamiento', component:CrearOrdenComponent},
  {path:"orden/orden-curso", component:OrdenEnCursoComponent},  //ruta de orden



];


export class AppRoutingModule {}
