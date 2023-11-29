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
  infoEmployee1 ={
    id: 0,
    name: ""
  }
  EmployeeForm = this.fb.group({
    name: ['', Validators.required],

  });

  hasUnitNumber = false;

constructor (public api: RestService, public modalService: ModalService) {}
  ngOnInit(): void {
    this.titulo = this.modalService.titulo;
    this.accion = this.modalService.accion.value;
    if (this.modalService.accion.value == 'Actualizar') {
      console.log(this.modalService.employee);
      this.EmployeeForm.controls['name'].setValue(
        this.modalService.employee.name + ''
      );

    }
  }


  async onSubmit(): Promise<void> {
    try {
      this.infoEmployee.name = this.EmployeeForm.controls['name'].value;

      console.log(this.infoEmployee);

      if (this.modalService.accion.value == "Actualizar") {

        this.infoEmployee1.id = this.modalService.id;
        this.infoEmployee1.name = this.infoEmployee.name + '';

        console.log(this.infoEmployee1.name)

        const res = await this.api.put("employee", this.modalService.id + '',  {name: this.infoEmployee1.name});
        console.log(res)

        if (res) {
          const result = await Swal.fire({
            title: 'Perfecto!',
            text: 'Su pieza ha sido actualizada',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        if (result.isConfirmed) {
          window.location.reload();
        }
        } else {
          Swal.fire(
            'Perfecto!',
            'Su pieza ha sido actualizada',
            'success'
          )
        }

      } else {
        const res = await this.api.post("employee", this.infoEmployee);

        if (res) {
          const result = await Swal.fire({
            title: 'Perfecto!',
            text: 'Su pieza ha sido registrada',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        if (result.isConfirmed) {
          window.location.reload();
        }
        } else {
         await Swal.fire(
            'Perfecto!',
            'Su pieza ha sido registrada',
            'success'
          )
          window.location.reload();
        }
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
