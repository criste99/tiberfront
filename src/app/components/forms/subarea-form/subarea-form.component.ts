import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { SubAreaModel } from 'src/app/Models/SubAreaModel';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-subarea-form',
  templateUrl: './subarea-form.component.html',
  styleUrls: ['./subarea-form.component.scss']
})
export class SubareaFormComponent {
  private fb = inject(FormBuilder);

  infoSubArea: SubAreaModel = {
    id_area:0,
    name:""
  }


SubAreaForm = this.fb.group({
    area: [null, Validators.required],
    subarea: [null, Validators.required]
  });

  hasUnitNumber = false;


  constructor (private sa: FormBuilder, public api: RestService) {

  }

  onSubmit(): void {
    if (this.SubAreaForm.valid) {
      this.infoSubArea.id_area = this.SubAreaForm.controls['area'].value
      this.infoSubArea.name = this.SubAreaForm.controls['subarea'].value
      this.api.post("subArea", this.infoSubArea).then(res=>{
        if(res=!null) {
          Swal.fire(
            'SubArea registrado!',
            'Nueva Subarea registrada en el sistema',
            'success'
          )

        }

      })


      console.log(this.infoSubArea);

    } else {
        Swal.fire(
          'Debe ingresar los datos requeridos!',
           'Por favor validar',
          'error'
         )
      

    }
   
  }
}
