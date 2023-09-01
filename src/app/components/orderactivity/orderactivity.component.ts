import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-orderactivity',
  templateUrl: './orderactivity.component.html',
  styleUrls: ['./orderactivity.component.scss']
})
export class OrderactivityComponent implements OnInit {

  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("orderactivity");
  }

}
