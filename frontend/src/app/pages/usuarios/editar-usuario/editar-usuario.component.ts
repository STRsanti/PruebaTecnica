import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
  @Input() usuario: any = {};
  @Input() departamentos: any[] = [];

  @Output() guardar = new EventEmitter<any>();
  @Output() cerrar = new EventEmitter<void>();

  enviarFormularioEditado(){
    this.guardar.emit(this.usuario);
  }

  cerrarModal(){
    this.cerrar.emit();
  }
}
