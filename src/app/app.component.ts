import { Component } from '@angular/core';
import { FooterComponent } from './components/j_campo/footer/footer.component';
import { RouterOutlet} from '@angular/router';
import { HeaderComponent } from "./components/j_campo/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
}

