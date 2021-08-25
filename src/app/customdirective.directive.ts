import { Directive, ElementRef, HostListener, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective   {

  /* /@Input() decorator adds metadata to the class 
  that makes the directive's appHighlight property available for binding. user can input value to it*/

  @Input() appHighlight = ''
  //refers DM elements using this directive 
  constructor(private elementRef : ElementRef) { }

  
  // functions mouseEnter() and mouseOut() are userdefined methods
  //@HostListener listens to JS event, just don't use "on" before event name
  // event mouseenter (this is JS event supported by ngular, ) ie. onmouseenter
  @HostListener('mouseenter') mouseEnter(){

    //this.elementRef is wrapper around a native element inside of a View
    // use .nativeElement to access actual element
    this.elementRef.nativeElement.style.fontWeight = "bold"
    //color is given in .html
    this.elementRef.nativeElement.style.backgroundColor = this.appHighlight;

  }

  @HostListener('mouseleave') mouseut(){
    this.elementRef.nativeElement.style.fontWeight = "normal"
    this.elementRef.nativeElement.style.backgroundColor = "initial"
  }

 

}
