import { Injectable } from '@angular/core';
import {MenuItem} from 'primeng/api';  

@Injectable()
export class TabMenuModel {
    
    items: MenuItem[];

    constructor() {
	this.items = [
            {label: 'Documentation', icon: 'fa-bookmark', routerLink: ['/info']},
            {label: 'Menu', icon: 'fa-align-justify', routerLink: ['/menu']},
            {label: 'Accordion', icon: 'fa-folder-open', routerLink: ['/accordion']},
            {label: 'Table', icon: 'fa-table', routerLink: ['/table']},
            {label: '1 TODO', icon: 'fa-support'},
            {label: '2 TODO', icon: 'fa-twitter'}
        ];
	console.log("items created:n constructor");
    }
}
