import { Routes } from '@angular/router';
import { HomeComponent } from './movil/home/home.component';

export const routes: Routes = [
    {
        path: 'movil',
        children: [
          {
            path: 'home',
            component: HomeComponent
          }
        ]
    }
    
];
