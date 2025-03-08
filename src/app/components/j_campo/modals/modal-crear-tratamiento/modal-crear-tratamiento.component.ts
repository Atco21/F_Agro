import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TratamientoService } from '../../../../services/tratamiento.service';

@Component({
  selector: 'app-modal-crear-tratamiento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-crear-tratamiento.component.html',
  styleUrls: ['./modal-crear-tratamiento.component.css']
})
export class ModalCrearTratamientoComponent {
  isVisible = false; // Controla la visibilidad del modal
  tratamientos: any;
  tratamientoSeleccionado: any = null;  // Inicializado a null o un objeto vacío

  @ViewChild('modalElement') modalElement!: ElementRef;
  @Output() tratamientoGuardado = new EventEmitter<string>();  // Emite el tratamiento seleccionado al padre



  constructor(private rendered: Renderer2 ,private tratamientoService: TratamientoService) {

  }


  ngOnInit(): void {
    this.tratamientoService.getTratamientoAll().subscribe(
      (data) => {
        this.tratamientos = data;
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }



  // Mostrar modal usando clases de Bootstrap
  abrirModal() {
    this.isVisible = true;
    this.rendered.addClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'false');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'block');
  }

  // Cerrar modal solo con el botón "X"
  cerrarModal() {
    this.isVisible = false;
    this.rendered.removeClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'true');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'none');
  }

  // Guardar cambios y emitir el tratamiento seleccionado
  guardarCambios() {
    console.log('Emitiendo:', this.tratamientoSeleccionado);  // Verifica el objeto completo
    this.tratamientoGuardado.emit(this.tratamientoSeleccionado);
    this.cerrarModal();
  }
  seleccionarTratamiento(tratamiento: any){
      // Si el tratamiento ya está seleccionada, la deseleccionamos
      if (this.tratamientoSeleccionado === tratamiento) {
        this.tratamientoSeleccionado = null;
      } else {
        // Si no, seleccionamos el nuevo y desmarcamos la anterior
        this.tratamientoSeleccionado = tratamiento;
      }
    }
  }



