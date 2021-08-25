import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  // use property binding 
  msgToChildComp : string = "This is to be sent to Child component"

  msgToChild: number = 2904

  constructor() { }

  ngOnInit(): void {
  }

}
