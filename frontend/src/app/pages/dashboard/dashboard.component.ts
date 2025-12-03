import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';

// Servicios
import { UsuarioService } from '../../services/usuario.service';
import { DepartamentoService } from '../../services/departamento.service'; 

//Componentes
import { CrearUsuarioComponent } from '../usuarios/crear-usuario/crear-usuario.component';
import { ConfirmarEliminacionComponent } from '../usuarios/confirmar-eliminacion/confirmar-eliminacion.component';
import { EditarUsuarioComponent } from '../usuarios/editar-usuario/editar-usuario.component';


@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [
    CommonModule,
    CrearUsuarioComponent,
    ConfirmarEliminacionComponent,
    EditarUsuarioComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  //Estado y datos
  rol: string = '';
  usuarios: any[] = [];
  departamentos: any[] = [];

  // Controladores 
  modalAbierto = false; // Modal de Crear Usuario
  mostrarModalEliminar = false;//Modal eliminar
  mostrarModalEditar = false;//Modal editar

  // Datos temporales para modales activos
  idEliminar: number | null = null;
  usuarioEditar: any = {};

  // Construcctor
  constructor(
    private router: Router,
    private location: Location,
    private usuariosService: UsuarioService, // Servicio para operaciones CRUD de usuarios
    private depService: DepartamentoService // Servicio para obtener la lista de departamentos
  ) {}

  ngOnInit(): void {
    this.rol = localStorage.getItem('rol') || '';
    if (!this.rol) {
      this.router.navigate(['/']);
    }

    //Cargar datos iniciales
    this.cargarUsuarios();
    this.cargarDepartamentos();
  }

  
  //Carga la lista completa de usuarios desde la API.
  cargarUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        console.log("Usuarios recibidos:", data);
        this.usuarios = data;
      },
      error: (err) => {
        console.error("Error al cargar usuarios", err);
      }
    });
  }

  //Carga la lista completa de departamentos desde la API (para usar en los selects).
  cargarDepartamentos(): void {
    this.depService.getDepartamentos().subscribe({
      next: (data) => {
        this.departamentos = data;
      },
      error: (err) => {
        console.error("Error al cargar departamentos en Dashboard", err);
      }
    });
  }

  //Abre modal creacion de usuarios
  abrirModal(): void {
    this.modalAbierto = true;
  }

  //Cierre modal creacion de usuarios
  cerrarModal(): void {
    this.modalAbierto = false;
  }

  //Rellena el formulario del modal editar
  abrirModalEditar(usuario: any): void {
    console.log("Usuario recibido para editar:", usuario);
    this.usuarioEditar = { ...usuario }; // Evitamos crear copia
    this.mostrarModalEditar = true;
  }

  //Evento para guardar cambios
  guardarCambiosEditar(data: any): void {
    this.usuariosService.editarUsuario(data.id, data).subscribe(() => {
      // Recargar la lista 
      this.cargarUsuarios(); 
      
      this.mostrarModalEditar = false;
    });
  }

  //Cierra modal editar
  cerrarModalEditar(): void {
    this.mostrarModalEditar = false;
  }

  //Abre modal para eliminar
  confirmarEliminacion(id: number): void {
    console.log("ABRIENDO MODAL PARA ID:", id);
    this.idEliminar = id;
    this.mostrarModalEliminar = true;
  }

  //Hace la accion de eliminar
  eliminar(): void {
    if (this.idEliminar !== null) {
      this.usuariosService.eliminarUsuario(this.idEliminar).subscribe(() => {
        // Actualiza la UI filtrando el usuario eliminado del array local
        this.usuarios = this.usuarios.filter(u => u.id !== this.idEliminar);
        this.mostrarModalEliminar = false;
      });
    }
  }

  //Cierra modal eliminar
  cerrarModalEliminar(): void {
    this.mostrarModalEliminar = false;
  }
  //navega a la pagina anterior
  volver(): void {
    this.location.back();
  }
}
