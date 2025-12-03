import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//Importacion de servicios necesarios para comunicar las apis
import { UsuarioService } from '../../../services/usuario.service';
import { DepartamentoService } from '../../../services/departamento.service';
@Component({
  selector: 'app-crear-usuario',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {

  //Modelo de datos para el formulario de añadir usuarios
  usuario = {
    nombre: '',
    email: '',
    departamento: '',
    id_departamento:null,//Usamos id_departamento para enlazar con el select
    telefono: '',
    estado: null
  };

  //Almacenar lista de departamentos disponibles
  departamentos: any[] = [];

  //Eventos
  @Output() cerrarModal = new EventEmitter<void>();//Cerrar el modal 
  @Output() usuarioCreado = new EventEmitter<void>();//Cuando el usuario se guardo con exito

  //Constructor
  constructor(
    private depService: DepartamentoService,//Inyeccion del servicio departamentos
    private usuarioService: UsuarioService//Inyeccion del servicio usuarios
  ){}

  ngOnInit(){
    //Carga la lista de departamentos
    this.cargarDepartamento();
  }

  //Envio del formulario, recompila datos y llama el servicio para crear el usuario
  crearUsuario(){
    //Mapeamos datos a la estructura que espera nuestra api
    const data = {
      Nombre_Completo: this.usuario.nombre,
      Correo: this.usuario.email,
      Id_Departamento: this.usuario.id_departamento,
      Telefono: this.usuario.telefono,
      Estado: this.usuario.estado
    }

    //Llammos al servicio para realizar la peticion POST
    this.usuarioService.crearUsuario(data).subscribe({
      next: (res) =>{
        console.log("Usuario guardado:", res);
        //Emite los diferentes eventos
        this.usuarioCreado.emit();
        this.cerrarModal.emit();
      },
      error: (err) => {
        console.error("Error al guardar", err)
      }
    })

    
  }

  //Cerrar el modal
  cerrar(){
    this.cerrarModal.emit();
  }

  //Carga la lista completa de departamentos desde la api
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

  
}
