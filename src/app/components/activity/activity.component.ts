import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  titulo_activity = "MODULO DE ACTIVIDADES"

  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("activity");
  }
}
