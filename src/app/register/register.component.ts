import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//properties
  uname=""
  email=""
  pswd=""
  //form Group
  registerForm = this.fb.group({
    //form array
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]], 
    email:['',[Validators.required, Validators.email,Validators.pattern('[a-zA-Z.@]*')]],  
     pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private ds :DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    
var uname =this.registerForm.value.uname
var email = this.registerForm.value.email
var pswd = this.registerForm.value.pswd

//if(this.registerForm.get('uname')?.errors){
  //alert("invalid username")
//}


if(this.registerForm.valid){
  const result = this.ds.register(uname,email,pswd)
  if (result){
    alert("Successfully Registered")
    this.router.navigateByUrl("")
  }
  else{
    alert("Already Existing Customer ... Please Login")
  }
}
else{
  alert("invalid form")
}

 

  }

}
