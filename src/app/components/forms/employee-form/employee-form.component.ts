import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  private fb = inject(FormBuilder);

  infoEmployee:EmployeeModel={
    name: ""
  }

  EmployeeForm = this.fb.group({
    name: [null, [Validators.required, Validators.pattern('')]],

  });

  hasUnitNumber = false;

constructor (private ep: FormBuilder, public api: RestService) {}


  onSubmit(): void {
if(this.EmployeeForm.valid){

  this.infoEmployee.name = this.EmployeeForm.controls ['name'].value


  this.api.post("employee", this.infoEmployee).then(res=> {
    if(res=!null) {
      Swal.fire(
        'Empleado registrado!',
        'Su empleado ha sido registrado en el sistema',
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


  console.log(this.infoEmployee);

}
else {
  Swal.fire(
   'Debe ingresar los datos requeridos!',
    'Por favor validar',
   'error'
  )
}
  }
}
