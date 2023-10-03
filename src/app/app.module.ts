import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TreeComponent } from './components/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './components/pages/pages.component';
import { ProfesComponent } from './components/profes/profes.component';
import { HttpClientModule } from '@angular/common/http';
import { PieceComponent } from './components/piece/piece.component';
import { ColorComponent } from './components/color/color.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AreaComponent } from './components/area/area.component';
import { SubareaComponent } from './components/subarea/subarea.component';
import { ActivityComponent } from './components/activity/activity.component';
import { OrderemployeeComponent } from './components/orderemployee/orderemployee.component';
import { ClientComponent } from './components/client/client.component';
import { OrderComponent } from './components/order/order.component';
import { OrderactivityComponent } from './components/orderactivity/orderactivity.component';
import { AvatarModule } from 'ngx-avatars';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    DragDropComponent,
    AddressFormComponent,
    PagesComponent,
    ProfesComponent,
    PieceComponent,
    ColorComponent,
    EmployeeComponent,
    AreaComponent,
    SubareaComponent,
    ActivityComponent,
    OrderemployeeComponent,
    ClientComponent,
    OrderComponent,
    OrderactivityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
