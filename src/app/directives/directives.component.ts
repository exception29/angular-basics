import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  message:string = "This is message from component"
  flag:boolean = true

  months = ['April','Jan', 'May', "June"]

  numbers = [2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit(): void {
  }

}
