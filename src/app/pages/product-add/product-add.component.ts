import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  // productForm = this.formBuilder.group({
  //   name: ["", Validators.required, Validators.minLength(2)],
  //   price: [0]
  // })

  //   constructor(
  //     private productService: ProductService,
  //     private formBuilder: FormBuilder
  //   ){}

  //   onHandleAdd(){
  //     if(this.productForm.valid){
  //      const product: IProduct = {
  //        name: this.productForm.value.name || "",
  //        price: this.productForm.value.price || 0,
  //      }
  //      this.productService.addProduct(product).subscribe(product =>{
  //        console.log(product)
  //      })
  //     }
  //   }

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    price: [0]
  })

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
    ){}

    onHandleAdd(){
      if(this.productForm.valid){
        const product: IProduct = {
          name: this.productForm.value.name || "",
          price: this.productForm.value.price || 0
        }

        this.productService.addProduct(product).subscribe(product =>{
          console.log("Thành công", product)
        })
      }
    }
}
