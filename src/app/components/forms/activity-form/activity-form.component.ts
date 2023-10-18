import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ActivityModels } from 'src/app/Models/ActivityModels';
import { ApiService } from 'src/app/Services/api.service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent {
  private fb = inject(FormBuilder);
  addressFormActivity = this.fb.group({
    name: [null, Validators.required],

  });

  infoActivity: ActivityModels = {
    name: ""
  }

  hasUnitNumber = false;


constructor(public api: RestService){

}

  async onSubmit(): Promise<void> {
    try {
      this.infoActivity.name = this.addressFormActivity.controls['name'].value;

      console.log(this.infoActivity);

      const res = await this.api.post("activity", this.infoActivity);

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
