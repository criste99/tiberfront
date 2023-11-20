import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/Services/rest.service';
import { OrderactivityFormComponent } from '../forms/orderactivity-form/orderactivity-form.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ModalService } from 'src/app/Services/modal-service';

@Component({
  selector: 'app-orderactivity',
  templateUrl: './orderactivity.component.html',
  styleUrls: ['./orderactivity.component.scss']
})
export class OrderactivityComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: RestService,public dialog: MatDialog, public modalService: ModalService) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    // Realizar la llamada a la API y cargar los datos en la tabla
    this.api.Get("orderActivity").then((res) => {
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
    }
    this.displayedColumns.push('Acciones');
  }
  openDialog(){
    this.dialog.open(OrderactivityFormComponent,{
      width:'400px',
      height:'600px'
    })
  }
  editarItem(orderactivity: any){
    this.modalService.titulo = "Modificar empleado";
  this.modalService.accion.next("Actualizar");
  this.dialog.open(OrderactivityFormComponent, {
    width: '350px',
    height: '200px',
  });
  }
  eliminarItem(orderactivity: any) {
    console.log(orderactivity.Id);
    Swal.fire({
      title: '¿Estás seguro que deseas remover el orderactivity?',
      text: 'El orderactivity no podrá ser recuperado!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, elíminalo!',
      cancelButtonText: 'No, olvídalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete("orderActivity", orderactivity.Id).then((res) => {
          if (res =! null) {
            Swal.fire(
              'Eliminado!',
              'Tu orderactivity ha sido eliminado.',
              'success'
            );
          }
        });
      } else if (result.isDismissed && result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Tu cliente sigue guardado',
          'error'
        );
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
