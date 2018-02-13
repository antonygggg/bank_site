import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  amount = 0.0;
  message = '';
  successMessage = '';
  transactionPair = null;
  selectedTransaction = null;
  transactionOptions = null;
  constructor() {

  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent(){
    this.message = '';
    this.successMessage = '';
  }

  makeTransaction(){
    let qs = '?amount='+this.amount+'&currencyPair='+this.transactionPair;
    let res = null;
    if (res.success === true) {
        this.successMessage = 'Transaction Successfull';
        this.message='';
    } else {
        this.successMessage = '';
        this.message = res.message;
        // rollback request to server
    }
  }
}
