import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { PieceModels } from 'src/app/Models/PieceModels';
import { ApiService } from 'src/app/Services/api.service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-piece-form',
  templateUrl: './piece-form.component.html',
  styleUrls: ['./piece-form.component.scss']
})
export class PieceFormComponent {
  private fb = inject(FormBuilder);
  addressFormPiece = this.fb.group({
    name: [null, Validators.required],

  });

  infoPiece: PieceModels = {
    name: ""
  }

  hasUnitNumber = false;


constructor(public api: RestService){

}

  async onSubmit(): Promise<void> {
    try {
      this.infoPiece.name = this.addressFormPiece.controls['name'].value;

      console.log(this.infoPiece);

      const res = await this.api.post("piece", this.infoPiece);

      if(res){
        Swal.fire(
          'Perfecto!',
          'Su pieza ha sido registrada',
          'success'
        )
      }else{
        Swal.fire(
          'Perfecto!',
          'Su pieza ha sido registrada',
          'success'
        )
      }

    } catch (e) {
      Swal.fire(
        'Error!',
        'Por favor intente de nuevo',
        'error'
      )
    }


  }
}
