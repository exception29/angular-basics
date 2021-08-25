import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = ""
  password: string = ""
  isdisabled: boolean = true

  validation(){
    if(this.email.length== 0 || this.password.length == 0){

      this.isdisabled = true

    }
    else{
      this.isdisabled = false
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
