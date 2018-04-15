import { Injectable } from '@angular/core';

@Injectable
export class DataformModel {

    firstName: string;

    disabled: boolean = true;

    toggleDisabled() {
        this.disabled = !this.disabled;
    }
}
