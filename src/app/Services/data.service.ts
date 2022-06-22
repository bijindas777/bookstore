import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentEmail:any
  //database
  db:any ={
    "sreekanth@gmail.com":{"email":"sreekanth@gmail.com","username":"sreekanth","password":1000},
    "aswin@gmail.com":{"email":"aswin@gmail.com","username":"aswin","password":1001,},
    "ajeesh@gmail.com":{"email":"ajeesh@gmail.com","username":"ajeesh","password":1002,},

  }

  constructor() { 
    this.getDetails()
  }

//get details from local storage
getDetails(){
  if(localStorage.getItem("database")){
    this.db=JSON.parse(localStorage.getItem("database")||'')
  }
  if(localStorage.getItem("currentuser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentuser")||'')
}
if(localStorage.getItem("currentemail")){
  this.currentEmail=JSON.parse(localStorage.getItem("currentemail")||'')
}
}


  //save details()
  saveDetails(){
    if(this.db){
      localStorage.setItem("database",JSON.stringify(this.db))
    }
    if(this.currentUser){
      localStorage.setItem("currentuser",JSON.stringify(this.currentUser))

    }
    if(this.currentEmail){
      localStorage.setItem("currentemail",JSON.stringify(this.currentEmail))

    }
  }
//signin
  signin(email:any,pswd:any){

    let db =this.db
    
    if(email in db){
      if(pswd==db[email]["password"]){
       this.currentUser=db[email]["username"]
       this.currentEmail=email

       this.saveDetails()
        return true
       
      }
      else{
        alert("incorrect password")
        return false
      }
    }
    else{
      alert("user doesnot exist")
      return false
    }
  }
  //register
  register(username:any,email:any,password:any){
    let db=this.db
    if(email in db){
      return false
    }
    else{
      //insert in db 
      db[email]={
        email,
        username,
        password,
    
      }
      this.saveDetails()
      return true
    }
  }

}
