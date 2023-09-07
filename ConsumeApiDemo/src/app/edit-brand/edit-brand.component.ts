import { Component } from '@angular/core';
import { Brand } from '../brand';
import { BrandService } from '../services/brand.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent {
brandList:any=[];
updateBrandForm!:FormGroup;
constructor(
  private actRoute:ActivatedRoute,
  public brandService:BrandService,
  public fb:FormBuilder,
  private router:Router
){
  this.updateBrandForm=this.fb.group({
    brandId:[''],
    brandName:['']
  })
  var id =this.actRoute.snapshot.paramMap.get('id');
  this.brandService.GetBrandById(id).subscribe((data)=>{
    console.log('data in eit-brand ts'+JSON.stringify(data))
    this.updateBrandForm=this.fb.group({
      brandId:[data.brandId],
      brandName:[data.brandName]
    })
  })
}
 ngOnInit(){
  
 }

 submitForm(){
  var id= this.actRoute.snapshot.paramMap.get('id');
  this.brandService.UpdateBrand('/'+id,this.updateBrandForm.value).subscribe(res=>{
    this.router.navigateByUrl('/brand-list');
  })
 }

}
