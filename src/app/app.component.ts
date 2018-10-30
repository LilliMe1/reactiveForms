import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder}  from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productForm;
  pList = [];
  response:any;
  ID;
  constructor(
    
    private y: FormBuilder,
    private a: HttpClient
    ){

      this.productForm = this.y.group({
        id: [],
        name: ['Macbook'],
        price: []
      })

      this.a.get('http://localhost:8900/products')
      .subscribe(
        (res:any)=>{
          console.log(res);
          this.pList = res.data;
          this.response =res;
        },
        ()=>{

        },
        ()=>{

        }
      )
  }

  collectData(){
    console.log(this.productForm.value);

    this.a.post('http://localhost:8900/users', this.productForm.value)
    .subscribe(
      (res)=>{
        console.log(res);
        this.pList.push(this.productForm.value)
      },
      (err)=>{
        console.log(err);
      },
      ()=>{

      }
    )

  }


  deleteRec(id){
    this.ID  =id;
    console.log('http://localhost:8900/products/' + id)
    console.log(`http://localhost:8900/prodcust/${id}`)
    this.a.delete(`http://localhost:8900/products/${id}`)
    .subscribe(
      res => {
        console.log(res);
        let list = [];
      }
    )
  }

  giveId(){

    return 10
  }
}
