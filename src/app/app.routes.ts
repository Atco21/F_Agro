import { Routes } from '@angular/router';
import { FooterComponent } from './components/movil/footer/footer.component';
import { CalendarioComponent } from './components/movil/calendario/calendario.component';
import { Component } from '@angular/core';


export const routes: Routes =
[   { path: '', redirectTo: 'calendario', pathMatch: 'full' },
    {path:'calendario',component:CalendarioComponent},
];

