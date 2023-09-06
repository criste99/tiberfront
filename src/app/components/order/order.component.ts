import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  titulo_order = "MODULO ORDENES"
  constructor(public api: RestService){
}
ngOnInit(): void {
  this.api.Get("order");
}
}
