import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CrearUsuarioComponent } from '../usuarios/crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule,CrearUsuarioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  rol: string = '';
  modalAbierto=false;


  constructor(
    private router: Router,
    private location: Location
  ){}

  ngOnInit(): void{
    this.rol = localStorage.getItem('rol') || '';

    if(!this.rol){
      this.router.navigate(['/']);
    }
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
