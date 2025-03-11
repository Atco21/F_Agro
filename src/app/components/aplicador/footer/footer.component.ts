import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true, // Esto es crucial si estás usando Angular Standalone Components
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [RouterLink, RouterOutlet]

})
export class FooterComponent {
  isCuentaMenuVisible: boolean = false;

  Menu() {
    this.isCuentaMenuVisible = !this.isCuentaMenuVisible;
  }

  closeCuentaMenu() {
    this.isCuentaMenuVisible = false;
  }
  

}
