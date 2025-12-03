import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartamentoService } from '../../../services/departamento.service';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  @Output() cerrarModal = new EventEmitter<void>();
  @Output() usuarioCreado = new EventEmitter<void>();

  usuario = {
    nombre: '',
    email: '',
    departamento: '',
    id_departamento:null,
    telefono: '',
    estado: null
  };

  departamentos: any[] = [];

  constructor(
    private depService: DepartamentoService,
    private usuarioService: UsuarioService
  ){}

  ngOnInit(){
    this.cargarDepartamento();
  }

  cargarDepartamento() {
  this.depService.getDepartamentos().subscribe({
    next: (res) => {
      console.log("Departamentos recibidos:", res);
      this.departamentos = res;
    },
    error: (err) => {
      console.error("Error al cargar departamentos", err);
    }
  });
}

  crearUsuario(){
    const data = {
      Nombre_Completo: this.usuario.nombre,
      Correo: this.usuario.email,
      Id_Departamento: this.usuario.id_departamento,
      Telefono: this.usuario.telefono,
      Estado: this.usuario.estado
    }

    this.usuarioService.crearUsuario(data).subscribe({
      next: (res) =>{
        console.log("Usuario guardado:", res);
        this.usuarioCreado.emit();
        this.cerrarModal.emit();
      },
      error: (err) => {
        console.error("Error al guardar", err)
      }
    })

    
  }

  cerrar(){
    this.cerrarModal.emit();
  }
}
