import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubAreaModel } from 'src/app/Models/SubAreaModel';
import { RestService } from 'src/app/Services/rest.service';
import { SubareaFormComponent } from '../forms/subarea-form/subarea-form.component';

@Component({
  selector: 'app-subarea',
  templateUrl: './subarea.component.html',
  styleUrls: ['./subarea.component.scss']
})
export class SubareaComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: RestService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    // Realizar la llamada a la API y cargar los datos en la tabla
    this.api.Get("subArea").then((res) => {
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
    this.dialog.open(SubareaFormComponent, {
      width: '400px',
      height: '400px',
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
