import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customerService';
import {Picture} from '../../domain/picture';
import {Observable} from "rxjs/Observable";

import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CustomerService]
})
export class TableComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  pictures: Observable<Picture[]>;

  pics : Observable<Picture[]>;

  cols : any[];

  ngOnInit() {

     // Subscribe example
     this.customerService.getPicturesForSubscription().subscribe(res => {
        this.pictures = res;
        console.log("pictures:" + this.pictures[0].description);
     },
     error => console.log('oops', error));

    this.pics = this.customerService.getPictures();
/*
    this.pics.forEach(function (value) {
  	console.log("Picture:" + JSON.stringify(value));
	});
*/

    this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'description', header: 'Description' }
        ];
  }

}
