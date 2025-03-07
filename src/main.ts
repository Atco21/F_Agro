import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core'; 
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Importar formularios reactivos
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    ReactiveFormsModule // ✅ IMPORTANTE: Habilita formGroup en todo el proyecto
  ]
});