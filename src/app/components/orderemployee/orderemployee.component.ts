import { Component } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-orderemployee',
  templateUrl: './orderemployee.component.html',
  styleUrls: ['./orderemployee.component.scss']
})
export class OrderemployeeComponent {
  titulo_orderEmployee = "MODULO ORDEN DE EMPLEADO"
  constructor(public api: RestService){
  }
  ngOnInit(): void {
    this.api.Get("orderemployee");
  }
}
