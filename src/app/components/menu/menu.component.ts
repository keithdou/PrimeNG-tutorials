import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = 'app';
  items: MenuItem[];
  ngOnInit() {
        this.items = [
            {label: 'File', icon: 'fa-bar-chart'},
            {label: 'Edit', icon: 'fa-calendar'},
            {label: 'View', icon: 'fa-book'},
            {label: 'About', icon: 'fa-twitter'}
        ];
        }
}

