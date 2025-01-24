import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciasComponent } from './components/movil/incidencias/incidencias.component';
import { OrdenComponent } from './components/movil/orden/orden.component';
import { DashboardComponent } from './components/movil/dashboard/dashboard.component';
import { TareasComponent } from './components/movil/dashboard/tareas/tareas.component';
import { OrdenNoFinalizadaComponent } from './components/movil/orden/orden-no-finalizada/orden-no-finalizada.component';
import { OrdenFinalizadaComponent } from './components/movil/orden/orden-finalizada/orden-finalizada.component';
import { CalendarioComponent } from './components/movil/calendario/calendario.component';
import { CrearIncidenciaComponent } from './components/movil/incidencias/crear-incidencia/crear-incidencia.component';
// import { IncidenciaNoFinalizadaComponent } from './components/movil/incidencias/incidencia-no-finalizada/incidencia-no-finalizada.component';
// import { IncidenciaFinalizadaComponent } from './components/movil/incidencias/incidencia-finalizada/incidencia-finalizada.component';

export const routes: Routes = [
  {
    path: 'movil',
    children: [
      {
        path: 'incidencias',
        component: IncidenciasComponent,
        // children: [
        //   {
        //     path: 'incidencia-no-finalizada',
        //     component: IncidenciaNoFinalizadaComponent,
        //   },
        //   {
        //     path: 'incidencia-finalizada',
        //     component: IncidenciaFinalizadaComponent,
        //   }
        // ]
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
        children: [
          {
            path: 'tareas',
            component: TareasComponent,
          }
        ]
      },
      {
          path: 'calendario',
          component: CalendarioComponent,
      },
      {
        path: 'crear-incidencia',
        component: CrearIncidenciaComponent,
      }
    ]
  }

];