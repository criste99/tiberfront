import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit{
  titulo_area = "MODULO DE AREA"

  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("area");
  }

}
