import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  submitted = false;
   // formGroup requires specification of all formControls
   loginForm : FormGroup = new FormGroup({
     uname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')] ),
     uemail: new FormControl(),
     pswd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
     cpswd: new FormControl()


   })

   // sending all validations back to .html page.
   // this function get executed implicitly 
   get aForm(){   
     return this.loginForm.controls
   }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
}
  constructor() { }

  ngOnInit(): void {
  }

}
