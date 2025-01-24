import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/j_campo/header/header.component';
import { FooterComponent } from './components/j_campo/footer/footer.component';
import { ModalCrearTareaComponent } from './components/j_campo/modal-crear-tarea/modal-crear-tarea.component';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { ModalCrearParcelaComponent } from './components/j_campo/modal-crear-parcela/modal-crear-parcela.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ModalCrearTareaComponent,ModalCrearParcelaComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
}

