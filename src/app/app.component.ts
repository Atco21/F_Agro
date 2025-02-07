import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from './components/movil/footer/footer.component';
import { HeaderComponent } from './components/movil/header/header.component';
import { QuimicosService } from './servicios/quimicos.service';



@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, RouterLink, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F_Agro';

  quimicos:any;

  constructor(private quimicosService: QuimicosService){
    this.quimicosService.obtenerQuimicos().subscribe(result => this.quimicos = result)
  }
}
