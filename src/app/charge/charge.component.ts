import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.css']
})
export class ChargeComponent implements OnInit {


  amount = 0.0;
  currencyId = 0;
  message = '';
  successMessage = '';

  constructor() { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {

  }

  ChargeUser() {
    var dataObj = {
      amount: this.amount,
      currencyId: this.currencyId
    }
    //var res = Util.sendData('url',dataObj);
    let res;
    if (res && res.success === true) {
      this.message = '';
      this.successMessage = 'transaction has been done successfully';
    }
    else {
      this.message = res.message;
      this.successMessage = '';
      // rollback plan
    }
  };

}
