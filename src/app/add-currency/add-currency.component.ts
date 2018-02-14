import { Component, OnInit, NgModule } from '@angular/core';
import { UtilService } from '../services/util.service'
import { ResultObject } from '../models/result-object';


@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})

export class AddCurrencyComponent implements OnInit {

  currencyName = '';
  ratioToDollar = 0.0;
  message = '';
  successMessage = '';
  allCurrencies = null;

  constructor(private util: UtilService) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let res: ResultObject = this.util.currencyGetAll();
    if(res.success){
      this.allCurrencies = res.resObj;
    }
    else{
      this.successMessage = '';
      this.message = 'there was error loading currencies'
      this.allCurrencies = null;
    }
  }

  AddCurrency() {
    //let qs = '?currencyName=' + this.currencyName + '&ratioToDollar=' + this.ratioToDollar;
    let res: ResultObject = this.util.currencyAdd(this.currencyName, this.ratioToDollar);
    if (res && res.success !== false) {
      this.message = '';
      this.successMessage = 'new currency has been added successfully';
    }
    else {
      this.successMessage = '';
      this.message = 'there was error in adding new currency';
      // roll back request to server
    }
    this.loadComponent();
  }

}
