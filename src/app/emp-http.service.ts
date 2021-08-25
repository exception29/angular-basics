import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';


@Injectable({
  providedIn: 'root'
})
export class EmpHttpService {

   // fetching data using http request
  // import HttpClientModule in app.module.ts

  // we are fetching data from JSN into service
  private  url : string = '/assets/data/employee.json'

  //received result is in form of Observable 
  // we need to convert it to Employee type
  // so there must be a standard for converting it to employee.....so create IEmployee.ts and save the employee
  //structure there

  constructor(private http  : HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)

  }
}
