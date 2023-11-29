import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PieceModels } from '../Models/PieceModels';
import { ClientModels } from '../Models/ClientModels';
import { OrderActivityModels } from '../Models/OrderActivityModels';
import { EmployeeModel } from '../Models/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  id: number;
  piece:PieceModels;
  client:ClientModels;
  orderActivity:OrderActivityModels;
  employee:EmployeeModel;

  titulo = "";
  accion = new BehaviorSubject("");
  constructor() { }
}
