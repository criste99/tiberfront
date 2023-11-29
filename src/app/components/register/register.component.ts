import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private builder: FormBuilder){

  }
  
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  onSubmit(): void {
    Swal.fire(
      'Orden registrada!',
      'Su orden ha sido registrada en el sistema',
      'success'
    )
  }
}
