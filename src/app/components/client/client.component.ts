import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{
  titulo_client = "MODULO CLIENTES"

  constructor(public api: RestService){
  }
  ngOnInit(): void {
    this.api.Get("client");
  }
}
