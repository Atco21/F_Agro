import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './movil/footer/footer.component';
import { HeaderComponent } from './movil/header/header.component';
import { HomeComponent } from './movil/home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, RouterLink, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F_Agro';
}
