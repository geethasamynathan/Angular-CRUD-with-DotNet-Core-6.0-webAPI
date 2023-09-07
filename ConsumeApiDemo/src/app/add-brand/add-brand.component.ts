import { Component } from '@angular/core';
import { BrandService } from '../services/brand.service';
import { Brand } from '../brand';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  brandForm!: FormGroup;
constructor(

  private formBuilder:FormBuilder,
  private router:Router,
  private brandService:BrandService){}

  ngOnInit(){
    this.brandForm=this.formBuilder.group({
      brandName:['',Validators.required]
    });
  }
  

  submitForm(){
    this.brandService.AddNewBrand(this.brandForm.value).subscribe((res)=>{
      console.log('Brand Added');
      this.router.navigateByUrl('brand-list');
    })
  }

}
