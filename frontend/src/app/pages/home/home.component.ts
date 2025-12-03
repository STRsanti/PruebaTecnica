import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}

  select(rol: string){
    console.log("Seleccionaste:",rol);
    localStorage.setItem('rol',rol);
    this.router.navigate(['/dashboard']);
  }
}
