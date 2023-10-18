import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { OrderEmployeeModel } from 'src/app/Models/OrderEmployeeModel';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-orderemployee-form',
  templateUrl: './orderemployee-form.component.html',
  styleUrls: ['./orderemployee-form.component.scss']
})
export class OrderemployeeFormComponent {
  private fb = inject(FormBuilder);

infoOrderEmployee: OrderEmployeeModel = {
  id_order_activity:0,
  id_employee:0
}


OrderEmployeeForm = this.fb.group({

    orderactivity: [null, Validators.required],
    nameemployee: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor (private oe: FormBuilder, public api: RestService) {

  }

  onSubmit(): void {
    if (this.OrderEmployeeForm.valid){
this.infoOrderEmployee.id_order_activity = this.OrderEmployeeForm.controls['orderactivity'].value
this.infoOrderEmployee.id_employee = this.OrderEmployeeForm.controls['nameemployee'].value

this.api.post("orderEmployee", this.infoOrderEmployee).then(res=> {
  if(res=!null) {
    Swal.fire(
      'Orden de empleado registrado!',
      'Su numero de orden de empleado ha sido registrado en el sistema',
      'success'
    )
  } else {
    Swal.fire(
      'Debe ingresar los datos correctos!',
       'Por favor validar',
      'error'
     )
  }


})

console.log(this.infoOrderEmployee);


    } else {
      Swal.fire(
        'Debe ingresar los datos requeridos!',
         'Por favor validar',
        'error'
       )
    }


  }
}
