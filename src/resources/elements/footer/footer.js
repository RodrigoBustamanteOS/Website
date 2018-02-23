import {bindable} from 'aurelia-framework';

export class Footer {
  constructor(){
    this.white = {
      color: 'white'
    }
  }
  @bindable value;

  valueChanged(newValue, oldValue) {

  }
}

