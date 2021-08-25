import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  emps : any[] = [];
  // a  = [1,2,3]
  //or
  // emps=[{}]
  constructor(private empService: EmpserviceService) { }

  ngOnInit(): void {

    this.emps = this.empService.getEmployees()
  }

}
