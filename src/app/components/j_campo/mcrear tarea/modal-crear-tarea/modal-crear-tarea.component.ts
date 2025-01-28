// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-modal-crear-tarea',
//   templateUrl: './modal-crear-tarea.component.html',
//   styleUrls: ['./modal-crear-tarea.component.css']
// })
// export class ModalCrearTareaComponent implements OnInit {
//   parcelaNombre: string = '';
//   tareaNombre: string = '';
//   aplicadorNombre: string = '';
//   maquinaNombre: string = '';
//   tratamientoNombre: string = '';
//   fecha: string = '';

//   ngOnInit(): void {
//     // Aquí puedes cargar los datos desde la base de datos
//     this.parcelaNombre = 'Nombre de la Parcela';
//     this.tareaNombre = 'Nombre de la Tarea';
//     this.aplicadorNombre = 'Nombre del Aplicador';
//     this.maquinaNombre = 'Nombre de la Máquina';
//     this.tratamientoNombre = 'Nombre del Tratamiento';
//     this.fecha = 'Fecha de la Tarea';
//   }

//   openParcelaModal(): void {
//     const modalCrearTarea = document.getElementById('modalCrearTarea');
//     const modalCrearParcela = document.getElementById('modalCrearParcela');

//     if (modalCrearTarea && modalCrearParcela) {
//       // Ocultar el primer modal
//       modalCrearTarea.classList.remove('show');
//       modalCrearTarea.setAttribute('aria-hidden', 'true');
//       modalCrearTarea.setAttribute('style', 'display: none;');

//       // Mostrar el segundo modal
//       modalCrearParcela.classList.add('show');
//       modalCrearParcela.setAttribute('aria-hidden', 'false');
//       modalCrearParcela.setAttribute('style', 'display: block; padding-right: 17px;');
//     }
//   }
// }
