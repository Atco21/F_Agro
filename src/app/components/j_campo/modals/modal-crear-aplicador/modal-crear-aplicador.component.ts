import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrabajadoresService } from '../../../../services/trabajadores.service';
import { User } from '../../../../models/User';


@Component({
  selector: 'app-modal-crear-aplicador',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-crear-aplicador.component.html',
  styleUrl: './modal-crear-aplicador.component.css'
})
export class ModalCrearAplicadorComponent implements OnInit{

  isVisible = false;
  users: User[] = [];
  aplicadoresSeleccionados: any = [];

  @ViewChild('modalElement') modalElement!: ElementRef;
  @Output() aplicadoresGuardados = new EventEmitter<any>();

  constructor(private rendered: Renderer2, private usersService: TrabajadoresService) {}


  ngOnInit() {
    this.usersService.obtenerAplicadores().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }


  revisarAplicadores(aplicador: any) {
    const index = this.aplicadoresSeleccionados.indexOf(aplicador);
    if (index === -1) {
      this.aplicadoresSeleccionados.push(aplicador); // Lo agrega si no está
    } else {
      this.aplicadoresSeleccionados.splice(index, 1); // Lo quita si ya está
    }
  }


  abrirModal() {
    this.isVisible = true;
    this.rendered.addClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'false');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'block');
  }

  cerrarModal() {
    this.isVisible = false;
    this.rendered.removeClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'true');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'none');
  }

  guardarCambios() {
    console.log('Emitiendo:', this.aplicadoresSeleccionados);
    this.aplicadoresGuardados.emit(this.aplicadoresSeleccionados);
    this.cerrarModal();
  }
}
