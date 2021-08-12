import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrylistComponent } from './countrylist/countrylist.component';
import {AddcountryComponent} from './addcountry/addcountry.component';
import {EditcountryComponent} from './editcountry/editcountry.component';
import {ViewcountryComponent} from './viewcountry/viewcountry.component';


const routes: Routes = [
  {path:'',component:CountrylistComponent},
  {path: 'addcountry', component: AddcountryComponent},
  {path: 'editcountry/:id', component: EditcountryComponent},
  {path: 'viewcountry', component: ViewcountryComponent},
  {path: 'viewcountry/:id', component: ViewcountryComponent},
  {path: 'countrylist', component: CountrylistComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
