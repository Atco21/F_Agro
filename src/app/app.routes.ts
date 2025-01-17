import { Routes } from '@angular/router';
import { DashboardComponent } from './components/movil/dashboard/dashboard.component';
import { CalendarioComponent } from './components/movil/calendario/calendario.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'calendario',
    component: CalendarioComponent,
 },

];