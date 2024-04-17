import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulariocontacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulariocontacto.component.html',
  styleUrl: './formulariocontacto.component.css'
})
export class FormulariocontactoComponent {

  nombre = '';
  telefono = '';
  correo = '';
  personas = '';
  fecha = '';
  showModal = false;

  formulario = {
    nombre: '',
    telefono: '',
    correo: '',
    personas: '',
    fecha: '',
  };

  reservar() {
    this.nombre = this.formulario.nombre;
    this.telefono = this.formulario.telefono;
    this.correo = this.formulario.correo;
    this.personas = this.formulario.personas;
    this.fecha = this.formulario.fecha;
    console.log(this.formulario);
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
    this.nombre = '';
    this.telefono = '';
    this.correo = '';
    this.personas = '';
    this.fecha = '';
  }

}
