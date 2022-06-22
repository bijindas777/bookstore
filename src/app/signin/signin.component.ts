import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  //properties
  email=""
  pswd=""

 signinForm=this.fb.group({
  email:["",[Validators.required, Validators.email,Validators.pattern('[a-zA-Z.@]*')]],
  pswd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
 })
//dependency injection
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  signin(){
    var email=this.signinForm.value.email
    var pswd =this.signinForm.value.pswd
if(this.signinForm.valid){
  const result =this.ds.signin(email,pswd)   

  if(result){
      alert("login successfully")
      this.router.navigateByUrl('home')
    }
}else{
  alert("invalid form")
}
 
     
    }
   
  

}
