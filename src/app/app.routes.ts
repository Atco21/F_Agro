import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciasComponent } from './components/movil/incidencias/incidencias.component';
import { OrdenComponent } from './components/movil/orden/orden.component';
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
      }
    ]
  }

];