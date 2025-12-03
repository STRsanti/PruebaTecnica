import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  rol: string = '';
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
}
