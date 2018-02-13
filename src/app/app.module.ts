import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TransferComponent } from './transfer/transfer.component';
import { RouterModule, Routes } from '@angular/router';
import { ChargeComponent } from './charge/charge.component';
import { AddExchangeComponent } from './add-exchange/add-exchange.component';


@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    ChargeComponent,
    AddExchangeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
