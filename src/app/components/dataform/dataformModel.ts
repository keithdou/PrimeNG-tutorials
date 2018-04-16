import { Injectable } from '@angular/core';

//@Injectable
export class DataformModel {

    firstname: string;
    lastname: string;

    disabled: boolean = true;

    toggleDisabled() {
        this.disabled = !this.disabled;
    }
}
