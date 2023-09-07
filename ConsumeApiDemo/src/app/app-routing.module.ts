import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { BarndListComponent } from './barnd-list/barnd-list.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';

const routes: Routes = [
  {path:'', redirectTo:'brand-list' , pathMatch:'full'},
  {path:'brand-list', component:BarndListComponent},
  {path:'add-brand', component:AddBrandComponent},
  {path:'edit-brand/:id', component:EditBrandComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
