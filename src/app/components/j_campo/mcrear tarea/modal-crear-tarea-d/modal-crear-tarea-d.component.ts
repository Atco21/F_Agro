// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-modal-crear-tarea-d',
//   templateUrl: './modal-crear-tarea-d.component.html',
//   styleUrls: ['./modal-crear-tarea-d.component.css']
// })
// export class ModalCrearTareaDComponent implements OnInit {
//   tareaNombre: string = '';
//   tareaDescripcion: string = '';

//   ngOnInit(): void {
//     // Inicialización si es necesario
//   }

//   saveTarea(): void {
//     // Lógica para guardar la tarea
//     console.log('Tarea guardada:', this.tareaNombre, this.tareaDescripcion);
//     // Aquí puedes agregar la lógica para guardar la tarea en la base de datos o en el estado de la aplicación
//   }

//   openFourthModal(): void {
//     const modalCrearTareaD = document.getElementById('modal-crear-tarea-d');
//     const modalCuarto = document.getElementById('modal-cuarto');

//     if (modalCrearTareaD && modalCuarto) {
//       // Ocultar el tercer modal
//       modalCrearTareaD.classList.remove('show');
//       modalCrearTareaD.setAttribute('aria-hidden', 'true');
//       modalCrearTareaD.setAttribute('style', 'display: none;');

//       // Mostrar el cuarto modal
//       modalCuarto.classList.add('show');
//       modalCuarto.setAttribute('aria-hidden', 'false');
//       modalCuarto.setAttribute('style', 'display: block; padding-right: 17px;');
//     }
//   }
// }
