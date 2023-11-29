import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/Services/rest.service';
import { EmployeeFormComponent } from '../forms/employee-form/employee-form.component';
import Swal from 'sweetalert2';
import { ModalService } from 'src/app/Services/modal-service';
import { RecursiveAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: RestService, public dialog: MatDialog, public modalService: ModalService) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    // Realizar la llamada a la API y cargar los datos en la tabla
    this.api.Get("employee").then((res) => {
      if (Array.isArray(res.data)) { // Verificar si res.data es un arreglo
        this.loadTable(res.data); // Cargar las columnas desde los datos
        this.dataSource = new MatTableDataSource(res.data); // Configurar los datos en el MatTableDataSource
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        console.error("La propiedad 'data' de la respuesta de la API no es un arreglo:", res.data);
        // Puedes manejar el error o mostrar un mensaje al usuario aquí
      }
    });
  }
  loadTable(data: any[]) {
    // Extraer los nombres de las columnas de la primera fila de datos (si los datos son objetos)
    if (data.length > 0) {
      this.displayedColumns = Object.keys(data[0]);
      this.displayedColumns.push('Acciones');
    }
  }
  
  openDialog () {
    this.modalService.titulo = "Nuevo empleado";
    this.modalService.accion.next("crear");
    this.dialog.open(EmployeeFormComponent, {
      width: '350px',
      height: '200px',
    })
   }

   closeDialog(){
    this.dialog.closeAll();
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarItem(row: any){
    this.modalService.titulo = "Modificar empleado";
    this.modalService.employee = row;
    this.modalService.id = row.Id;
  this.modalService.accion.next("Actualizar");
  this.dialog.open(EmployeeFormComponent, {
    width: '350px',
    height: '200px',
  });
  }

  async eliminarItem(employee: any){
    console.log(employee.Id);
    Swal.fire({
    title: '¿Estás seguro que deseas remover empleado?',
    text: 'El empleado no podrá ser recuperado!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, elíminalo!',
    cancelButtonText: 'No, olvídalo'}).then(async (result) => {
      if (result.isConfirmed) {
       await this.api.delete("employee", employee.Id).then(async (res) => {
          if (res =! null) {
           await Swal.fire(
              'Eliminado!',
              'Tu empleado ha sido eliminado.',
              'success'
            );
          }
          window.location.reload();
        });
            
      } 
      else if (result.isDismissed && result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Tu pieza sigue guardada',
          'error'
        );
      }
    });
  }

}
