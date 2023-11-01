import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { OrderActivityModels } from 'src/app/Models/OrderActivityModels';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-orderactivity-form',
  templateUrl: './orderactivity-form.component.html',
  styleUrls: ['./orderactivity-form.component.scss']
})
export class OrderactivityFormComponent {
  constructor(public api: RestService){

  }
  private fb = inject(FormBuilder);
  addressFormOrderActivity = this.fb.group({
    id_order: [null, Validators.required],
    id_activity: [null, Validators.required],
    entryDate: [null, Validators.required],
    status: [null, Validators.required],
    outDate:[null, Validators.required]
  });

  ngOnInit(): void {
    this.api.Get("orderActivity");
  }

  infoOrdersActivity: OrderActivityModels = {
    id_order:0,
    id_activity:0,
    entry_date:"",
    status:"",
    out_date:""
  }
  
  hasUnitNumber = false;

  async onSubmit(): Promise<void> {
    try {
      this.infoOrdersActivity.id_order = this.addressFormOrderActivity.controls['id_order'].value;
      this.infoOrdersActivity.id_activity = this.addressFormOrderActivity.controls['id_activity'].value;
      this.infoOrdersActivity.entry_date = this.addressFormOrderActivity.controls['entryDate'].value;
      this.infoOrdersActivity.status = this.addressFormOrderActivity.controls['status'].value;
      this.infoOrdersActivity.out_date = this.addressFormOrderActivity.controls['outDate'].value;

      console.log(this.infoOrdersActivity);

      const res = await this.api.post("orderActivity", this.infoOrdersActivity);

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
