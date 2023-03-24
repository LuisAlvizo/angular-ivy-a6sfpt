import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datos: personas[] = [
    { id: 1, nombre: 'Luis', apellido: 'Alvizo', sexo: 'M' },
    { id: 2, nombre: 'Gonzalo', apellido: 'Perez', sexo: 'M' },
    { id: 3, nombre: 'Monica', apellido: 'Lopez', sexo: 'F' },
    { id: 4, nombre: 'Juan', apellido: 'Rodriguez', sexo: 'M' },
    { id: 5, nombre: 'Sofia', apellido: 'Pedroza', sexo: 'F' },
  ];
} //fin clase

interface personas {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;
}
