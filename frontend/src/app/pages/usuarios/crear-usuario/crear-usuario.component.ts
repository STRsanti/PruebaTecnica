import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  @Output() cerrarModal = new EventEmitter<void>();

  usuario = {
    nombre: '',
    email: '',
    departamento: '',
    telefono: '',
    estado: ''
  };

  crearUsuario(){
    console.log("Usuario creado: ", this.usuario);
    this.cerrarModal.emit();
  }

  cerrar(){
    this.cerrarModal.emit();
  }
}
