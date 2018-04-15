export class DataformModel {

    firstName: string;

    disabled: boolean = true;

    toggleDisabled() {
        this.disabled = !this.disabled;
    }
}
