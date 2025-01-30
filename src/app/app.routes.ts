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
// import { IncidenciaNoFinalizadaComponent } from './components/movil/incidencias/incidencia-no-finalizada/incidencia-no-finalizada.component';
// import { IncidenciaFinalizadaComponent } from './components/movil/incidencias/incidencia-finalizada/incidencia-finalizada.component';

export const routes: Routes = [
  {
    path: 'movil',
    children: [
      {
        path: 'incidencias',
        component: IncidenciasComponent,
        children: [
          {
            path: 'crear-incidencia',
            component: CrearIncidenciaComponent,
          },
          //   {
          //     path: 'incidencia-finalizada',
          //     component: IncidenciaFinalizadaComponent,
          //   }
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

];