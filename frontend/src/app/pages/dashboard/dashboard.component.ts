import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CrearUsuarioComponent } from '../usuarios/crear-usuario/crear-usuario.component';
import { UsuarioService } from '../../services/usuario.service';
import { ConfirmarEliminacionComponent } from '../usuarios/confirmar-eliminacion/confirmar-eliminacion.component';


@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule,CrearUsuarioComponent,ConfirmarEliminacionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  rol: string = '';
  usuarios: any[] = [];

  modalAbierto=false;

  mostrarModalEliminar = false;
  idEliminar: number | null = null;

  constructor(
    private router: Router,
    private location: Location,
    private usuariosService: UsuarioService
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

}
