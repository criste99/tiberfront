import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-orderemployee-form',
  templateUrl: './orderemployee-form.component.html',
  styleUrls: ['./orderemployee-form.component.scss']
})
export class OrderemployeeFormComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({

    orderactivity: [null, Validators.required],
    nameemployee: [null, Validators.required],
    numberorder: [null, Validators.required],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;


  onSubmit(): void {
    Swal.fire(
      'Empleado registrado!',
      'Su empleado ha sido registrado en el sistema',
      'success'
    )
  }
}
