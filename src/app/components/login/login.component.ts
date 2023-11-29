import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private builder: FormBuilder){

  }
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
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
