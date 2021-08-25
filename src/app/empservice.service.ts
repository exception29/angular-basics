import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  employees = [
    
      {
        "id": 101,
        "name": "John",
        "designation": "Developer"
      },
      {
        "id": 102,
        "name": "Jane",
        "designation": "Tester"
      },
      {
        "id": 103,
        "name": "Jack",
        "designation": "Sr. Developer"
      },  {
        "id": 104,
        "name": "Rose",
        "designation": "HR"
      }
    ]

  constructor() { }
  
  getEmployees(){
    return this.employees;
  }
}
