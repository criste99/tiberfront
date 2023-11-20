import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { ModalService } from 'src/app/Services/modal-service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit{
  private fb = inject(FormBuilder);

  titulo ="";
  accion = "";
  infoEmployee:EmployeeModel={
    name: ""
  }

  EmployeeForm = this.fb.group({
    name: [null, [Validators.required, Validators.pattern('')]],

  });

  hasUnitNumber = false;

constructor (private ep: FormBuilder, public api: RestService, public modalService: ModalService) {}
  ngOnInit(): void {
    this.titulo = this.modalService.titulo;
    this.accion = this.modalService.accion.value;
  }


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
