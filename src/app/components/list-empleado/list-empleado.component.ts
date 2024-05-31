import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrl: './list-empleado.component.css'
})
export class ListEmpleadoComponent implements OnInit {

  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  listEmpleado: Empleado[] = [];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private empleadoService: EmpleadoService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar){

  }

  ngOnInit():void{
    this.cargarEmpleados();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados(){
    this.listEmpleado = this.empleadoService.getEmpleados();
    this.dataSource.data = this.listEmpleado;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }

  eliminarEmpleado(index: number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width:'350px',
      data:{mesnaje:'Esta seguro que desea eliminar el colaborador'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==='aceptar'){
        this.empleadoService.eliminarEmpleado(index);
        this.cargarEmpleados();
        this.snackBar.open('El empleado fue elimando con exito !!','',{
          duration:3000
        });
      }
     
    });

    
  }

  editarEmpleado(){

  }

}
