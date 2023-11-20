import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { AddressFormComponent } from './components/forms/address-form/address-form.component';
import { TreeComponent } from './components/tree/tree.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PieceComponent } from './components/piece/piece.component';
import { ColorComponent } from './components/color/color.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AreaComponent } from './components/area/area.component';
import { SubareaComponent } from './components/subarea/subarea.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ClientComponent } from './components/client/client.component';
import { OrderComponent } from './components/order/order.component';
import { OrderactivityComponent } from './components/orderactivity/orderactivity.component';
import { OrderemployeeComponent } from './components/orderemployee/orderemployee.component';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';
import { PieceFormComponent } from './components/forms/piece-form/piece-form.component';
import { OrderactivityFormComponent } from './components/forms/orderactivity-form/orderactivity-form.component';
import { EmployeeFormComponent } from './components/forms/employee-form/employee-form.component';
import { OrderemployeeFormComponent } from './components/forms/orderemployee-form/orderemployee-form.component';
import { SubareaFormComponent } from './components/forms/subarea-form/subarea-form.component';

const routes: Routes = [

  {path:"piece",component:PieceComponent},
  {path:"color",component:ColorComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"area",component:AreaComponent},
  {path:"subarea",component:SubareaComponent},
  {path:"activity",component:ActivityComponent},
  {path:"client",component:ClientComponent},
  {path:"order",component:OrderComponent},
  {path:"orderactivity",component:OrderactivityComponent},
  {path:"orderemployee",component:OrderemployeeComponent},


  {path:"table",component:TableComponent},
  {path:"dragdrop",component:DragDropComponent},
  {path:"addressform",component:AddressFormComponent},
  {path:"employeeform",component:EmployeeFormComponent},
  {path:"orderemployeeform",component:OrderemployeeFormComponent},
  {path:"subareaform",component:SubareaFormComponent},
  {path:"tree",component:TreeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"table",component:TableComponent},
  {path:"clientform",component:ClientFormComponent},
  {path:"pieceform",component:PieceFormComponent},
  {path:"orderactivityform",component:OrderactivityFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
