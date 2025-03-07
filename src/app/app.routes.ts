import { Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { IncidenciasComponent } from './components/aplicador/incidencias/incidencias.component';
import { OrdenComponent } from './components/aplicador/orden/orden.component';
import { DashboardComponent } from './components/aplicador/dashboard/dashboard.component';
import { OrdenPendientesComponent } from './components/aplicador/orden/orden-pendientes/orden-pendientes.component';
import { OrdenFinalizadaComponent } from './components/aplicador/orden/orden-finalizada/orden-finalizada.component';
import { CalendarioComponent } from './components/aplicador/calendario/calendario.component';
import { CrearIncidenciaComponent } from './components/aplicador/incidencias/crear-incidencia/crear-incidencia.component';
import { CrearIncidenciaMaquinaComponent } from './components/aplicador/incidencias/crear-incidencia/crear-incidencia-maquina/crear-incidencia-maquina.component';
import { QuimicosComponent } from './components/j_campo/quimicos/quimicos.component';
import { PedidoComponent } from './components/j_campo/pedido/pedido.component';
import LoginComponent from './components/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'incidencias', component: IncidenciasComponent,
    children: [
      { path: 'crear-incidencia', component: CrearIncidenciaComponent }
    ]
  },
  { 
    path: 'orden', component: OrdenComponent,
    children: [
      { path: 'orden-pendientes', component: OrdenPendientesComponent },
      { path: 'orden-finalizada', component: OrdenFinalizadaComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'quimicos', component: QuimicosComponent },
  { path: 'crear-pedido', component: PedidoComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
