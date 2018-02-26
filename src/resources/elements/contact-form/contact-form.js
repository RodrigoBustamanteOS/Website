import {bindable, bindingMode} from 'aurelia-framework';

export class ContactForm {
    @bindable name = "";
    constructor() {
        this.name;
        this.email
        this.message
    }

    hello() {
        console.log("test")
    }
}