import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  constructor(public dialog: MatDialog) {}

  // openFullScreenModal() {
  //   const dialogRef = this.dialog.open(AddTareaModalComponent, {
  //     width: '100vw',
  //     height: '100vh',
  //     maxWidth: '100vw',
  //     maxHeight: '100vh',
  //     panelClass: 'full-screen-modal'
  //   });
  // }
}

