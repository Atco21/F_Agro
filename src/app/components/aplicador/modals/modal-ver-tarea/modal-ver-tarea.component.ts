import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importamos CommonModule

@Component({
  selector: 'app-modal-ver-tarea',
  imports: [CommonModule],
  templateUrl: './modal-ver-tarea.component.html',
  styleUrl: './modal-ver-tarea.component.css'
})
export class ModalVerTareaComponent {
  isVisible = false; // Variable que controla si el modal está visible o no
  @ViewChild('modalElement') modalElement!: ElementRef;

  constructor(private renderer: Renderer2) { }

  toggleModal() {
    this.isVisible = !this.isVisible;

    if (this.modalElement) {
      if (this.isVisible) {
        this.renderer.setStyle(this.modalElement.nativeElement, 'display', 'block');
      } else {
        this.renderer.setStyle(this.modalElement.nativeElement, 'display', 'none');
      }
    }
  }

}
