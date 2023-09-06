import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  titulo_employee = "MODULO EMPLEADOS"

  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("employee");
  }

}
