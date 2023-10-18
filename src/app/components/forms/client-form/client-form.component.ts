import { Component,OnInit,inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ClietModels } from 'src/app/Models/ClientModels';
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
  addressFormClient = this.fb.group({
    clientName: [null, Validators.required],
  });

  infoClient: ClietModels = {
    name: ""
  }

  hasUnitNumber = false;

  

  onSubmit(): void {
    Swal.fire(
      'Pieza registrada!',
      'Su pieza ha sido registrada en el sistema',
      'success'
    )
  }
}