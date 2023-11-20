import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { PieceModels } from 'src/app/Models/PieceModels';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal-service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-piece-form',
  templateUrl: './piece-form.component.html',
  styleUrls: ['./piece-form.component.scss']
})
export class PieceFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  titulo = "";
  accion = "";

  addressFormPiece = this.fb.group({
    name: ['', Validators.required],

  });

  infoPiece: PieceModels = {
    name: ""
  }

  infoPiece1 = {
    id: 0,
    name: ""
  }

  hasUnitNumber = false;


  constructor(public api: RestService, public modalService: ModalService) { }
  ngOnInit(): void {
    this.titulo = this.modalService.titulo;
    this.accion = this.modalService.accion.value;
    if (this.modalService.accion.value == 'Actualizar') {
      console.log(this.modalService.piece);
      this.addressFormPiece.controls['name'].setValue(
        this.modalService.piece.name + ''
      );

    }
  }



  async onSubmit(): Promise<void> {
    try {
      this.infoPiece.name = this.addressFormPiece.controls['name'].value;

      console.log(this.infoPiece);

      if (this.modalService.accion.value == "Actualizar") {

        this.infoPiece1.id = this.modalService.id;
        this.infoPiece1.name = this.infoPiece.name + '';

        console.log(this.infoPiece1.name)

        const res = await this.api.put("piece", this.modalService.id + '', {name: this.infoPiece1.name});
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
        const res = await this.api.post("piece", this.infoPiece);

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
          Swal.fire(
            'Perfecto!',
            'Su pieza ha sido registrada',
            'success'
          )
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
