import { Component, OnInit } from '@angular/core';
import { APIserviceService } from '../apiservice.service';

@Component({
  selector: 'app-apiservice',
  templateUrl: './apiservice.component.html',
  styleUrls: ['./apiservice.component.css']
})
export class APIserviceComponent implements OnInit {

  news : any[] = []
  rocketsFromService  :any[] = []

  constructor(private apiService  : APIserviceService) { }

  ngOnInit(): void {

    this.apiService.getRockets().subscribe(data=> this.rocketsFromService = data)

    this.apiService.getNews().subscribe(data=>{console.log(data.articles);
      this.news = data.articles 
    })
  }

}
