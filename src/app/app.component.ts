import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from './components/movil/footer/footer.component';
import { HeaderComponent } from './components/movil/header/header.component';
import { QuimicosService } from './_services/quimicos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import LoginComponent from "./login/login.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterOutlet, RouterModule, FormsModule, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F_Agro';

  isLoggedIn: boolean = false;

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  // Maneja el evento de éxito de login
  onLoginSuccess() {
    this.isLoggedIn = true;
  }

  logout(){
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }

  quimicos:any;

  constructor(private quimicosService: QuimicosService){
    this.quimicosService.obtenerQuimicos().subscribe(result => this.quimicos = result)
  }
}
