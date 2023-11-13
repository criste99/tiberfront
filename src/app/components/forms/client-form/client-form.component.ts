import { Component,OnInit,inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ClientModels } from 'src/app/Models/ClientModels';
import { ModalService } from 'src/app/Services/modal-service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})



export class ClientFormComponent implements OnInit{
  constructor(public api: RestService, public modalService: ModalService){

  }
  ngOnInit(): void {
    // this.api.Get("client");
    this.titulo = this.modalService.titulo;
    this.accion = this.modalService.accion.value;

  }
  private fb = inject(FormBuilder);
  titulo ="";
  accion = "";
  addressFormClient = this.fb.group({
    clientName: [null, Validators.required]
  });
  
  infoClient: ClientModels = {
    name: ""
  }

  hasUnitNumber = false;

  

  async onSubmit(): Promise<void> {
    try {
      this.infoClient.name = this.addressFormClient.controls['clientName'].value;

      console.log(this.infoClient);

      const res = await this.api.post("client", this.infoClient);

      if(res){
        Swal.fire(
          'Perfecto!',
          'Su pieza ha sido registrada',
          'success'
        )
      }else{
        Swal.fire(
          'Perfecto!',
          'Su pieza ha sido registrada',
          'success'
        )
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
