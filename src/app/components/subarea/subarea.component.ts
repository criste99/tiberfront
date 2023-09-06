import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-subarea',
  templateUrl: './subarea.component.html',
  styleUrls: ['./subarea.component.scss']
})
export class SubareaComponent implements OnInit {
  titulo_subArea = "MODULO SUBAREA"
  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("subarea");
  }
}
