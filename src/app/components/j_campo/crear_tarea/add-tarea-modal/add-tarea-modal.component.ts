import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-tarea-modal',
  templateUrl: './add-tarea-modal.component.html',
  styleUrls: ['./add-tarea-modal.component.css'],
  standalone: true,
  imports: [MatButtonModule]
})
export class AddTareaModalComponent {

  constructor(public dialogRef: MatDialogRef<AddTareaModalComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}

