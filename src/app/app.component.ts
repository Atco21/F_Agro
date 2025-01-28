import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/j_campo/header/header.component';
import { FooterComponent } from './components/j_campo/footer/footer.component';
// import { ModalCrearTareaComponent } from './components/j_campo/modals/modal-crear-tarea/modal-crear-tarea.component';
import { FormsModule } from '@angular/forms';
import { ModalCrearParcelaComponent } from './components/j_campo/modals/modal-crear-parcela/modal-crear-parcela.component';
import { ModalCrearTareaComponent } from "./components/j_campo/modals/modal-crear-tarea/modal-crear-tarea.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet,
    HeaderComponent,
    FormsModule,
    ModalCrearParcelaComponent,
    ModalCrearTareaComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
}

