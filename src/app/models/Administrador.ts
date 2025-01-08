import { Persona } from './Persona';

export class Administrador implements Persona {
  
  dni: string;
  nombre: string;
  email: string;
  edad: number;
  telefono: number;
  direccion: string;
  nivelAcceso: number;

  constructor(dni: string, nombre: string, email: string, edad: number, telefono: number, direccion: string, nivelAcceso: number) {
    this.dni = dni;
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
    this.telefono = telefono;
    this.direccion = direccion;
    this.nivelAcceso = nivelAcceso;

  }
}
