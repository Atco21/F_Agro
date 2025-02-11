import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { AddTareaModalComponent } from '../crear_tarea/add-tarea-modal/add-tarea-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[RouterLink,MatDialogModule]
})
export class HeaderComponent {

  constructor(private router: Router) {}

  
}

