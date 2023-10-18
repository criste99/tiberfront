import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ColorModels } from 'src/app/Models/ColorModels';
import { ApiService } from 'src/app/Services/api.service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss']
})
export class ColorFormComponent {
  private fb = inject(FormBuilder);
  addressFormColor = this.fb.group({
    name: [null, Validators.required],

  });

  infoColor: ColorModels = {
    name: ""
  }

  hasUnitNumber = false;


constructor(public api: RestService){

}

  async onSubmit(): Promise<void> {
    try {
      this.infoColor.name = this.addressFormColor.controls['name'].value;

      console.log(this.infoColor);

      const res = await this.api.post("color", this.infoColor);

      if(res){
        Swal.fire(
          'Yeeeiii!',
          'Por favor intente de nuevo',
          'success'
        )
      }else{
        Swal.fire(
          'Error!',
          'Por favor intente de nuevo',
          'error'
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
