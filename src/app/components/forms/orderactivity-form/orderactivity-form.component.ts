import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-orderactivity-form',
  templateUrl: './orderactivity-form.component.html',
  styleUrls: ['./orderactivity-form.component.scss']
})
export class OrderactivityFormComponent {
  private fb = inject(FormBuilder);
  addressFormOrderActivity = this.fb.group({
    Activity: [null, Validators.required],
    EntryDate: [null, Validators.required],
    State: [null, Validators.required],
    OutDate:[null, Validators.required]
  });

  hasUnitNumber = false;



  onSubmit(): void {
    alert('Thanks!');
  }
}
