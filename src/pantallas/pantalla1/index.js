import {inject} from 'aurelia-framework';
import {Common} from '../../services/common';

@inject(Common)
export class Pantalla1 {  
    constructor(common) {
        this.common = common;
        this.theMail = {
            name: "",
            email: "",
            message: ""
        }
    }
    sendData() {
        if (this.theMail.email == undefined || this.theMail.email == null || this.theMail.email == "" ||
        this.theMail.name == undefined || this.theMail.name == null || this.theMail.name == "" ||
        this.theMail.message == undefined || this.theMail.message == null || this.theMail.message == "") {
            alert("Favor ingresar los datos correspondientes!");
        } else {
            alert("Gracias! Su mensaje fue enviado correctamente.");
            this.common.postData(this.theMail);
        }
         
    }
    // $(".page-host").scrollTop(0);
    
}
                                           
