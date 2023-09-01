import { Component } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent {
  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("piece");
  }
}
