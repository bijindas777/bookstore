import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any
lDate:any
email=""
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 
    this.user=this.ds.currentUser
    this.lDate=new Date()
  }

  ngOnInit(): void {
    // if(!localStorage.getItem("currentEmail")){
    //   alert("please Log In")
    //   this.router.navigateByUrl("")
    // }
  }
  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentEmail")


this.router.navigateByUrl("")
  }
  changeImage(){
    
  }
 
  
}
