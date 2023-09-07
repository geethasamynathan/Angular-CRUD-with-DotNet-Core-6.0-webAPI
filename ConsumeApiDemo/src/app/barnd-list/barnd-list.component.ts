import { Component } from '@angular/core';
import { BrandService } from '../services/brand.service';
import { Brand } from '../brand';
@Component({
  selector: 'app-barnd-list',
  templateUrl: './barnd-list.component.html',
  styleUrls: ['./barnd-list.component.css']
})
export class BarndListComponent {
brandList:any=[];
constructor(private brandService:BrandService){}
ngOnInit(){
this.loadBrand();
console.log(this.brandList)
}
loadBrand(){
  return this.brandService.GetAllBrands().subscribe((data)=>{
    console.log(data)
    this.brandList=data;
  })
}

deleteBrand(data:Brand){
  var index=this.brandList.map((x: { brandName: any; }) => {return x.brandName}).indexOf(data.brandId);
  console.log('index'+index)
return this.brandService.DeleteBrand(data.brandId).subscribe(res =>{
   this.loadBrand();

})
}
}
