import { Component, OnInit } from '@angular/core';
import {Country} from '../country';
import {ActivatedRoute, Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';


@Component({
  selector: 'app-viewcountry',
  templateUrl: './viewcountry.component.html',
  styleUrls: ['./viewcountry.component.css']
})
export class ViewcountryComponent implements OnInit {


  country = new Country();
  constructor(private _route:Router, private _service: NgserviceService, private _activatedRouter: ActivatedRoute) { }
  ngOnInit() {
      let a =this._activatedRouter.snapshot.paramMap.get('id');
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
  gotolist() {
    this._route.navigate(['countrylist']);
  }
}
