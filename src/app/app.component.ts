import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/j_campo/header/header.component';
import { FooterComponent } from './components/j_campo/footer/footer.component';
import { FormsModule } from '@angular/forms';
// import { ModalCrearParcelaComponent } from './components/j_campo/modals/modal-crear-parcela/modal-crear-parcela.component';
// import { ModalCrearDTareaComponent } from "./components/j_campo/modals/modal-crear-dtarea/modal-crear-dtarea.component";
// import { ModalCrearTratamientoComponent } from './components/j_campo/modals/modal-crear-tratamiento/modal-crear-tratamiento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet,
    HeaderComponent,
    FormsModule,
    // ModalCrearParcelaComponent,
    // ModalCrearDTareaComponent,
    // ModalCrearTratamientoComponent

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
}
