import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  isValid:boolean = false //this will be now value of property [disabled]
  imageUrl : string = './assets/images/nature.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
