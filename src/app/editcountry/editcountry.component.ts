import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import {Country} from '../country';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-editcountry',
  templateUrl: './editcountry.component.html',
  styleUrls: ['./editcountry.component.css']
})
export class EditcountryComponent implements OnInit {

  country = new Country();
  constructor(private _route: Router,private _service: NgserviceService, private _activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    let a =this._activatedRoute.snapshot.paramMap.get('id');
  if (a != null && a != ''){
   let id = parseInt(a);
  this._service.fetchCountryByIdFromRemote(id).subscribe(
  data=>{
    console.log("data received");
    this.country = data;
  },
    error => console.log("Exception Occured")
  )
}
}

  updateCountrytformsubmit()
  {
  this._service.addCountryToRemote(this.country).subscribe
  (
    data =>{
      console.log("Data added successfully");
      this._route.navigate(['countrylist']);
    },
    error =>console.log("error")
  )
  }
  
  gotolist() {
    this._route.navigate(['countrylist']);
  }
  

}
