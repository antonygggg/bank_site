import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TransferComponent } from './transfer/transfer.component';
import { RouterModule, Routes } from '@angular/router';
import { ChargeComponent } from './charge/charge.component';
import { AddExchangeComponent } from './add-exchange/add-exchange.component';
import { AddCurrencyComponent } from './add-currency/add-currency.component';

import { UtilService } from './services/util.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    ChargeComponent,
    AddExchangeComponent,
    AddCurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
