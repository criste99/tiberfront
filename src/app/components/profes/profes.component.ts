import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-profes',
  templateUrl: './profes.component.html',
  styleUrls: ['./profes.component.scss']
})
export class ProfesComponent implements OnInit{
  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("color");
  }
}
