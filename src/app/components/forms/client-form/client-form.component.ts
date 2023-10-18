import { Component,OnInit,inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})



export class ClientFormComponent implements OnInit{
  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("client");
  }
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    clientName: [null, Validators.required],
    identification: [null, Validators.required],
  });

  hasUnitNumber = false;

  

  onSubmit(): void {
    Swal.fire(
      'Pieza registrada!',
      'Su pieza ha sido registrada en el sistema',
      'success'
    )
  }
}
