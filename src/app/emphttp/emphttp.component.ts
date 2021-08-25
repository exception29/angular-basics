import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpHttpService } from '../emp-http.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-emphttp',
  templateUrl: './emphttp.component.html',
  styleUrls: ['./emphttp.component.css']
})
export class EmphttpComponent implements OnInit {

  // we are getting data from json into EmpHttpService and then from service here
  employeesFromService  :any = []

  constructor(private empHttpService  : EmpHttpService) { }
  

  ngOnInit(): void {

    // subscribe and send data as param  to set it to employeesFromService
    this.empHttpService.getEmployees().subscribe(data=> this.employeesFromService = data)
  }

}
