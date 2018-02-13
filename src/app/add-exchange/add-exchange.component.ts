import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.css']
})
export class AddExchangeComponent implements OnInit {

  currencyPair = '';
  ratio=0.0;
  pairsOptions = null;
  selectedPair = null;

  message='';
  successMessage='';

  constructor() { }

  ngOnInit() {
  }

  makeExchange(){

  }

}
