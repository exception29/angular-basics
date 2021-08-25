import { Component, OnInit } from '@angular/core';

// import Forms Module in app.module.ts

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent implements OnInit {

  username : string = ""; //we will get the name from input field and thru 2 way binding ngModel will provide it
  constructor() { }

  ngOnInit(): void {
  }

}
