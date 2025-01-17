import { Component } from '@angular/core';
import { TareasComponent } from "./tareas/tareas.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [TareasComponent]
})
export class DashboardComponent {

}
