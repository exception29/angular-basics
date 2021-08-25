import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  // sending message to parent

  // 1. holds value to be sent
  msgToParent : string = "sending message from child to parent"

  // 2. @utput - allows to send data from child to Parent
  // 3. EventEmitter emits custom events synchronously or asynchronousl
  @Output() childEvent = new EventEmitter()

  // 4. to make this event available outside child component, ie. making it ava in child.html
  childEventHandler(){
    this.childEvent.emit(this.msgToParent)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
