import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { EditcountryComponent } from './editcountry/editcountry.component';
import { ViewcountryComponent } from './viewcountry/viewcountry.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddcountryComponent,
    CountrylistComponent,
    EditcountryComponent,
    ViewcountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
