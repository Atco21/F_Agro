import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/j_campo/header/header.component';
import { FooterComponent } from './components/j_campo/footer/footer.component';
import { ModalCrearTareaComponent } from './components/j_campo/modal-crear-tarea/modal-crear-tarea.component';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { ModalCrearParcelaComponent } from './components/j_campo/modal-crear-parcela/modal-crear-parcela.component';
=======
import { FooterComponent } from './components/j_campo/footer/footer.component';
import { RouterOutlet} from '@angular/router';
import { HeaderComponent } from "./components/j_campo/header/header.component";
>>>>>>> 996d04ff7b174cb45c9f3dcab761e7f433b946af

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ModalCrearTareaComponent,ModalCrearParcelaComponent,FormsModule],
=======
  imports: [FooterComponent, RouterOutlet, HeaderComponent],
>>>>>>> 996d04ff7b174cb45c9f3dcab761e7f433b946af
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
}

