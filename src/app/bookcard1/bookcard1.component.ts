import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-bookcard1',
  templateUrl: './bookcard1.component.html',
  styleUrls: ['./bookcard1.component.css']
})
export class Bookcard1Component implements OnInit {
  public productList : any;
  // user:any
  constructor(private cartService : CartService,private ds:DataService,private router:Router) { 
    // this.user=this.ds.currentUser

  }

  ngOnInit(): void {

    // this.cartService.getProduct()
    // .subscribe(res=>{
    //   this.productList = res;

    //   this.productList.forEach((a:any) => {

    //     Object.assign(a,{quantity:1,total:a.price});

    //   });


    // })

  }
//   productArray =[
//     {
//       prodId:1,
//       img:"../../assets/how to win.jpg",
//       amt:279,
//       qnt:1

//     }
    
//   ];
//   inc(prod){
// this.prod.qnt = prod.qnt + 1;

//   }
// logout(){
//   localStorage.removeItem("currentUser")
//   localStorage.removeItem("currentEmail")


// this.router.navigateByUrl("")
// }
// addtocart(item:any){
//   this.cartService.addtoCart(item);
// }
}
