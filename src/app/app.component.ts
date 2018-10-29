import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder}  from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apppro';
  images = [];
  msg;
  userForm;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ){

    this.http
      .get('https://dog.ceo/api/breeds/image/random/50')
      .subscribe(
        (data)=>{
          console.log(data);
          this.images = data.message;
          this.msg  = '';
        },
        (err)=>{
          //error
          console.log(err);
          this.msg = "Something is wrong; Please try again";
        },
        ()=>{
          //complete
          console.log("Completed");
        }
      );


      this.userForm = this.fb.group({
        name: [],
        age: [],
        parents: this.fb.group({
          mother: [],
          father: ['', []]
        }),
        skills: this.fb.array([])
      })




  }


  postData(){
    this.http.post('http://localhost:8900/users', this.userForm.value)
    .subscribe(
      res =>{ console.log(res)},
      err => {console.log(err)},
      ()=> {console.log("Completed")}
    )
  }
}
