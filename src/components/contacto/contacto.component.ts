import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- IMPORTA CommonModule
import { ContactoService } from '../../app/services/contacto.service';


@Component({
  selector: 'app-contacto',
  standalone: true,                   // <-- Agrega esto
  imports: [FormsModule, CommonModule],             // <-- Agrega esto
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  mensajeEnviado = false;
  errorEnvio = false;

  datos = {
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  };

  constructor(private contactoService: ContactoService) {}

  onSubmit() {
    this.contactoService.enviarMensaje(this.datos).subscribe({
      next: () => {
        this.mensajeEnviado = true;
        this.errorEnvio = false;
        this.datos = { nombre: '', apellido: '', email: '', mensaje: '' };
      },
      error: () => {
        this.errorEnvio = true;
      }
    });
  }
}
