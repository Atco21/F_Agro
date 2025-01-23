import { Component } from '@angular/core';
import { TareasComponent } from "./tareas/tareas.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [TareasComponent]
})
export class DashboardComponent {

}
