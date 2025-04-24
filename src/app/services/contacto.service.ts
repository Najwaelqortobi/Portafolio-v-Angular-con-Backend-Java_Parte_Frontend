import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactoService {
  private apiUrl = 'http://localhost:8080/api/contacto'; // Cambia si tu backend está en otro puerto

  constructor(private http: HttpClient) {}

  enviarMensaje(datos: any): Observable<any> {
    return this.http.post(this.apiUrl, datos, { responseType: 'text' });
  }
}
