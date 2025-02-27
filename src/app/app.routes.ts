import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciasComponent } from './components/movil/incidencias/incidencias.component';
import { OrdenComponent } from './components/movil/orden/orden.component';
import { DashboardComponent } from './components/movil/dashboard/dashboard.component';
import { OrdenNoFinalizadaComponent } from './components/movil/orden/orden-no-finalizada/orden-no-finalizada.component';
import { OrdenFinalizadaComponent } from './components/movil/orden/orden-finalizada/orden-finalizada.component';
import { CalendarioComponent } from './components/movil/calendario/calendario.component';
import { CrearIncidenciaComponent } from './components/movil/incidencias/crear-incidencia/crear-incidencia.component';
import { CrearIncidenciaMaquinaComponent } from './components/movil/incidencias/crear-incidencia/crear-incidencia-maquina/crear-incidencia-maquina.component';
import { QuimicosComponent } from './components/movil/quimicos/quimicos.component';
import { PedidoComponent } from './components/movil/pedido/pedido.component';
import LoginComponent from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { JefeGuard } from './guards/guard-jefe.guards';
import { AplicadorGuard } from './guards/guard-aplicador.guards';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component'; // Componente para manejar errores

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'movil',
    canActivate: [AuthGuard], // Asegura que el usuario esté autenticado
    children: [
      {
        path: 'quimicos',
        canActivate: [JefeGuard], // Solo accesible por Jefes de Campo
        component: QuimicosComponent,
      },
      {
        path: 'crear-pedido',
        canActivate: [JefeGuard], // Solo accesible por Jefes de Campo
        component: PedidoComponent,
      },
      {
        path: '',
        canActivate: [AplicadorGuard], // Aplicador puede acceder a todas las demás rutas
        children: [
          {
            path: 'incidencias',
            component: IncidenciasComponent,
            children: [
              {
                path: 'crear-incidencia',
                component: CrearIncidenciaComponent,
              },
            ]
          },
          {
            path: 'orden',
            component: OrdenComponent,
            children: [
              {
                path: 'orden-no-finalizada',
                component: OrdenNoFinalizadaComponent,
              },
              {
                path: 'orden-finalizada',
                component: OrdenFinalizadaComponent,
              }
            ]
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'calendario',
            component: CalendarioComponent,
          },
          {
            path: 'crear-incidencia',
            component: CrearIncidenciaComponent,
            children: [
              {
                path: 'crear-incidencia-maquina',
                component: CrearIncidenciaMaquinaComponent,
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: ErrorHandlerComponent, // Muestra error en lugar de redirigir al login
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
