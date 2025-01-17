import { Component } from '@angular/core';
import { HeaderComponent } from './components/movil/header/header.component'; // Ajusta la ruta según tu estructura de carpetas
import { DashboardComponent } from './components/movil//dashboard/dashboard.component';
import { FooterComponent } from './components/movil//footer/footer.component';
import { TareasComponent } from "./components/movil/dashboard/tareas/tareas.component";
import { RouterOutlet,RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DashboardComponent, FooterComponent, TareasComponent,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
}

