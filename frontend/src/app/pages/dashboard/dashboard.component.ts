import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CrearUsuarioComponent } from '../usuarios/crear-usuario/crear-usuario.component';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule,CrearUsuarioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  rol: string = '';
  usuarios: any[] = [];

  modalAbierto=false;

  constructor(
    private router: Router,
    private location: Location,
    private usuariosService: UsuarioService
  ){}


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
