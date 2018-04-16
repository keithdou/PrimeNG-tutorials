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
  menuSelection : string;
  ngOnInit() {
        this.items = [
            {label: 'File', icon: 'fa-bar-chart' command: (event) => {this.processSelection(event.item)}},
            {label: 'Edit', icon: 'fa-calendar' command: (event) => {this.processSelection(event.item)}},
            {label: 'View', icon: 'fa-book'  command: (event) => {this.processSelection(event.item)}},
            {label: 'About', icon: 'fa-twitter'  command: (event) => {this.processSelection(event.item)}},
            {label: 'Documentation', icon: 'fa-book'  routerLink: "/info"}
        ];
        }
        
    processSelection(item: MenuItem) {
      console.log("Menu Option selected:" + item.label);
      this.menuSelection = item.label;
    }
}

