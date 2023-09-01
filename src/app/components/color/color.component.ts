import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("color");
  }
}
