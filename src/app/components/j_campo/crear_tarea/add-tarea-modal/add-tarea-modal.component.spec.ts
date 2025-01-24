// filepath: /c:/Users/acome/2DAW/Angular/Repo_Proyecto_git/F_Agro/src/app/components/j_campo/crear_tarea/add-tarea-modal/add-tarea-modal.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-tarea-modal',
  templateUrl: './add-tarea-modal.component.html',
  styleUrls: ['./add-tarea-modal.component.css']
})
export class AddTareaModalComponent {

  constructor(public dialogRef: MatDialogRef<AddTareaModalComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
