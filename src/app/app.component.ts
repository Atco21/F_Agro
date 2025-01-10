import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppbarComponent } from './appbar/appbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F_Agro';
}
