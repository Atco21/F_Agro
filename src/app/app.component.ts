import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppbarComponent } from './components/appbar/appbar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F_Agro';
}
