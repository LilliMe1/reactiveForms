import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rctforms';
  productForm;
  defaultData = {
    id: '900909099',
    name: 'MacBook Pro',
    price: '10K',
    features: ['Display', 'dsdsd', 'dsds', 'dsddsdewe', 'dsdsddsddwewew'],
   
  }
  constructor(){

    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      features: new FormArray([
    
      ]),
      manufactured: new FormGroup({
        by: new FormControl(),
        year: new FormControl()
      })
      
    });

    for(let i = 0; i<this.defaultData.features.length; i++){
      this.productForm.get('features').push(new FormControl)
    }

  }

  addFeature(){
    this.productForm.get('features').push(
      new FormControl('RAM 8GB')
    )
  }

  removeFeature(index:number){
    this.productForm.get('features').removeAt(index)
  }

  collectData(){
    console.log(this.productForm.value)
  }

  reset(){
    this.productForm.reset();
  }
  resetPrice(){
    this.productForm.get('price').reset()
  }
  setValue(){
    this.productForm.patchValue(this.defaultData)
  }
}
