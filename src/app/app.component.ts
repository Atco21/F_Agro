import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/movil/footer/footer.component';
import { HeaderComponent } from './components/movil/header/header.component';



@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F_Agro';

}
