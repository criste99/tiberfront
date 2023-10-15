import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-subarea-form',
  templateUrl: './subarea-form.component.html',
  styleUrls: ['./subarea-form.component.scss']
})
export class SubareaFormComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    area: [null, Validators.required],
    subarea: [null, Validators.required]
  });

  hasUnitNumber = false;

  onSubmit(): void {
    Swal.fire(
      'SubArea registrado!',
      'Nueva Subarea registrada en el sistema',
      'success'
    )
  }
}
