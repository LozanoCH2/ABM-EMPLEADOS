import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado:Empleado[]=[{
    nombreCompleto:'Alexis Lozano',
    correo:'correo@corre.com',
    sexo:'Masculino',
    telefono:12345678900,
    fechaIngreso:new Date(),
    estadoCivil:'Casado'
  },{
    nombreCompleto:'Juanita Lozano',
    correo:'correo1@correo.com',
    sexo:'Femenino',
    telefono:12345678901,
    fechaIngreso:new Date(),
    estadoCivil:'Casada'
  },{
    nombreCompleto:'Juanita Peres',
    correo:'correo2@correo.com',
    sexo:'Femenino',
    telefono:12345678902,
    fechaIngreso:new Date(),
    estadoCivil:'Casada'
  },{
    nombreCompleto:'Kevin Lozano',
    correo:'correo3@correo.com',
    sexo:'Masculino',
    telefono:12345678903,
    fechaIngreso:new Date(),
    estadoCivil:'Soltero'
  }];


  constructor() { }

  getEmpleados(): Empleado[]{
    return [...this.listEmpleado];
  }

  eliminarEmpleado(index: number): void{
    this.listEmpleado.splice(index,1);
  }

  agregarEmpleado(empleado: Empleado){
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index:number){
    return this.listEmpleado[index];
  }
}
