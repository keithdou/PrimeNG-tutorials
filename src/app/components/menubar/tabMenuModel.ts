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
            {label: 'Forms', icon: 'fa-wpforms', routerLink: ['/dataform']},
            {label: 'Miscellaneous', icon: 'fa-twitter', routerLink: ['/miscellaneous']}
        ];
	console.log("items created in constructor");
    }
}
