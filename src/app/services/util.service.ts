import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as cloneDeep from 'lodash/cloneDeep';
import { ResultObject } from '../models/result-object'

@Injectable()
export class UtilService {

  constructor(private http: HttpClient) { }
  apiUrl = '';
  res: ResultObject = {
    success: false,
    message: '',
    resObj: null
  };

  sendData(url, reqObj) {
    return null;
  }

  getData(url): ResultObject {
    let res = cloneDeep(this.res);
    let httpRes;
    try {
      httpRes = this.http.get(this.apiUrl + '');

    }
    catch (e) {
      res.success = false;
      res.message = 'http get error';
      res.resObj = null;
    }
    return res;
  }

  currencyGetAll() {
    const url = 'api/CurrencyGetAll';
    let res: ResultObject = this.getData(url);
    return res;
  }

  currencyAdd(name: string, ratio: Number) {
    //const qs = '?name=' + name + '&ratio=' + ratio;
    const url = '';
    let rq = {
      name: name,
      ratio: ratio
    };

    let res: ResultObject = this.sendData(url, rq);
    return res;
  }

  exchangeGetAll(){
    const url = 'api/ExchangeGetAll';
    let res: ResultObject = this.getData(url);
    return res;
  }

  exchangeAdd(from, to, ratio) {
    //const qs = '?name=' + name + '&ratio=' + ratio;
    const url = '';
    let rq = {
      from: from,
      to: to,
      ratio: ratio
    };

    let res: ResultObject = this.sendData(url, rq);
    return res;
  }
}
