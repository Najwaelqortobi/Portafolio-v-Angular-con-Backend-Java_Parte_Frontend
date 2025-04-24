import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // <--- esta linea y la parte de provideHttpClient() en providers 
//es lo que nos permite Enviar peticiones HTTP (como GET, POST, PUT, DELETE) a servidores o APIs externas+Comunicar tu frontend Angular con un backend
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()
  ]
};

//aqui es la config principal de toda la appi 