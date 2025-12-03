import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CrearUsuarioComponent } from '../usuarios/crear-usuario/crear-usuario.component';
import { UsuarioService } from '../../services/usuario.service';
import { ConfirmarEliminacionComponent } from '../usuarios/confirmar-eliminacion/confirmar-eliminacion.component';
import { EditarUsuarioComponent } from '../usuarios/editar-usuario/editar-usuario.component';
import { DepartamentoService } from '../../services/departamento.service'; 

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule,CrearUsuarioComponent,ConfirmarEliminacionComponent,EditarUsuarioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  rol: string = '';
  usuarios: any[] = [];

  departamentos: any[] = [];

  modalAbierto=false;

  mostrarModalEliminar = false;
  idEliminar: number | null = null;

  mostrarModalEditar = false;
  usuarioEditar: any = {};

  constructor(
    private router: Router,
    private location: Location,
    private usuariosService: UsuarioService,
    private depService: DepartamentoService
  ){}

  confirmarEliminacion(id: number){
    console.log("ABRIENDO MODAL PARA ID:", id);
    this.idEliminar = id;
    this.mostrarModalEliminar = true;
  }

  eliminar(){
    if(this.idEliminar !== null){
      this.usuariosService.eliminarUsuario(this.idEliminar).subscribe(()=>{
        this.usuarios = this.usuarios.filter(u => u.id !== this.idEliminar);
        this.mostrarModalEliminar = false;
      });
    }
  }

  cerrarModalEliminar(){
    this.mostrarModalEliminar = false;
  }

  ngOnInit(): void{
    this.rol = localStorage.getItem('rol') || '';

    if(!this.rol){
      this.router.navigate(['/']);
    }

    this.cargarUsuarios();
    this.cargarDepartamentos();
  }

  cargarUsuarios(){
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        console.log("Usuarios recibidos:",  data);
        this.usuarios = data;
      },
      error: (err) => {
        console.error("Error al cargar ussuarios", err)
      }
    });
  }

  volver(){
    this.location.back();
  }

  abrirModal(){
    this.modalAbierto = true;
  }

  cerrarModal(){
    this.modalAbierto = false;
  }

  cargarDepartamentos() {
  this.depService.getDepartamentos().subscribe({
      next: (data) => {
          this.departamentos = data;
      },
      error: (err) => {
          console.error("Error al cargar departamentos en Dashboard", err);
      }
  });
}

  abrirModalEditar(usuario: any){
    console.log("Usuario recibido:", usuario)
    this.usuarioEditar = {...usuario};
    this.mostrarModalEditar= true;
  }

  guardarCambiosEditar(data: any){
    this.usuariosService.editarUsuario(data.id, data).subscribe(() =>{
      this.cargarUsuarios();
      this.cargarDepartamentos(); 
      this.mostrarModalEditar = false;
    });
  }

  cerrarModalEditar(){
    this.mostrarModalEditar = false;
  }

}
