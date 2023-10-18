import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  constructor(public api: RestService){

  }
  ngOnInit(): void {
    this.api.Get("piece");
  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    client: ["", Validators.required],
    piece: ["", Validators.required],
    color: ["", Validators.required],
    quanty: ["", Validators.required, Validators.maxLength(5)],
  });

  hasUnitNumber = false;

  pieces = [
    {name: 'Cabezales'},
    {name: 'Brazos'},
    {name: 'Bobinas'},
    {name: 'Brocas'},
    {name: 'Afiladoras'},
    {name: 'Cilindros'},
  ];

  colors = [
    {name: 'Plata'},
    {name: 'Oro'},
    {name: 'Brush'},
    {name: 'Niquel'},

  ];  

  onSubmit(): void {
    Swal.fire(
      'Orden registrada!',
      'Su orden ha sido registrada en el sistema',
      'success'
    )
  }
}
