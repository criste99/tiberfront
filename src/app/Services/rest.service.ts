import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public api: HttpClient) {}
  Url="http://127.0.0.1:8000/api/"
  public async Get (controller:string){
    var respo:any
    await this.api.get(this.Url+controller).toPromise().then((res=>{
      respo=res;
      console.log(respo);
    }))
  }
}
