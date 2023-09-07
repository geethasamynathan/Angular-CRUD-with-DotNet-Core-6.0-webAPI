import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarndListComponent } from './barnd-list/barnd-list.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    BarndListComponent,
    AddBrandComponent,
    HeaderComponent,
    EditBrandComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
