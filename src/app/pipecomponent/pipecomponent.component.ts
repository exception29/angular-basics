import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecomponent',
  templateUrl: './pipecomponent.component.html',
  styleUrls: ['./pipecomponent.component.css']
})
export class PipecomponentComponent implements OnInit {

  title = "Angular Application"
  today = new Date();
  jsonval = {name:'Rox', age:'25',
              address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


  constructor() { }

  ngOnInit(): void {
  }

}
