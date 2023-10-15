import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    name: [null, Validators.required],
  });

  hasUnitNumber = false;

 

  onSubmit(): void {
if(this.addressForm.valid){
  Swal.fire(
    'Empleado registrado!',
    'Su empleado ha sido registrado en el sistema',
    'success'
  )
}
  }
}
