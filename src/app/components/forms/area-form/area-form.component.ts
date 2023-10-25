import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { AreaModels } from 'src/app/Models/AreaModels';
import { ApiService } from 'src/app/Services/api.service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.scss']
})
export class AreaFormComponent {
  private fb = inject(FormBuilder);
  addressFormArea = this.fb.group({
    name: [null, Validators.required],

  });

  infoArea: AreaModels = {
    name: ""
  }

  hasUnitNumber = false;


constructor(public api: RestService){

}

  async onSubmit(): Promise<void> {
    try {
      this.infoArea.name = this.addressFormArea.controls['name'].value;

      console.log(this.infoArea);

      const res = await this.api.post("area", this.infoArea);

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
