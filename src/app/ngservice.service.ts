import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

class Country {
}

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchCountrylistFromRemote():Observable<any>{
   return this._http.get<any>("http://localhost:8080/rest/v2/getcountrylist");
  }
  addCountryToRemote(country: Country): Observable<any>{
    return this._http.post<any>('http://localhost:8080/rest/v2/addcountry',country);
  }
  fetchCountryByIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>('http://localhost:8080/rest/v2/getcountrybyid/'+id);
  }
  deleteCountryByIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8080/rest/v2/deletecountrybyid/' + id);
  }
}
