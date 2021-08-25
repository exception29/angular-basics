import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRocket } from './IRocket';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  private  url : string = 'https://api.spacexdata.com/v4/rockets'

  //india entertainment
   private newsurl:string = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"

 //india business
 // private newsurl:string = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"

  // all india news
 //private newsurl :string = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"
  constructor(private http  : HttpClient) { }

  getRockets() : Observable<IRocket[]>{
    return this.http.get<IRocket[]>(this.url)

  }

  getNews(): Observable<any>{
    return this.http.get(this.newsurl)
  }

}
