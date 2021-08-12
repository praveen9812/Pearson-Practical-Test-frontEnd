import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Country } from '../country';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';






@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
countries: Array<Country> = [];

displayedColumns: string[] = ['id', 'name','Edit','View','Delete'];
dataSource = new MatTableDataSource();

  constructor(private _route: Router,private _service:NgserviceService) { }

  ngOnInit(): void {
      
      this.getCountries();
   
  }


  getCountries() {
    this._service.fetchCountrylistFromRemote().subscribe(
      data =>
      this.dataSource.data =data,
      error => console.log("Exception occurred 1"),
    )
  }
  isEmpty()
  {
    if (this.countries == null)
    {
      return true;
    }
    else { return false; }
  }

  goToAddCountry() {
    this._route.navigate(['/addcountry']);
  }
  goToUpdateCountry(id: number) {
    console.log("id: "+ id);
    this._route.navigate(['/editcountry', id]);
  }
  goToViewCountry(id: number){
    this._route.navigate(['/viewcountry', id]);

  }
  deleteCountry(id: number){
    

    this._service.deleteCountryByIdFromRemote(id).subscribe(
      data=>{
        console.debug("deleted successfully");
      this._route.navigate(['/countrylist']);
      },
        error => console.log("Exception Occured")
      )
  }
}