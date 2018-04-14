import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TabMenuModel} from './tabMenuModel';

@Component({
  selector: 'app-root',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  providers: [TabMenuModel]
})
export class MenuBarComponent {

  constructor(private tabMenuModel : TabMenuModel) {}
  title = 'app';
  items: MenuItem[];
  ngOnInit() {
	this.items = this.tabMenuModel.items;
	}
}
