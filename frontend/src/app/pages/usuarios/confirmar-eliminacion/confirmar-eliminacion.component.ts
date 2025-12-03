import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-confirmar-eliminacion',
  standalone: true,
  imports: [],
  templateUrl: './confirmar-eliminacion.component.html',
  styleUrl: './confirmar-eliminacion.component.css'
})
export class ConfirmarEliminacionComponent {
  @Output() aceptar = new EventEmitter<void>();
  @Output() cancelarModal = new EventEmitter<void>();

  confirmar() {
    this.aceptar.emit();
  }

  cancelar() {
    this.cancelarModal.emit();
  }
}
