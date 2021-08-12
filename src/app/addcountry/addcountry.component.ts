import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import {Country} from '../country';

@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent implements OnInit {
  country = new Country();
  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  addCountrytformsubmit()
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
