import { AccountFormComponent } from './../account-form/account-form.component';
import { Account } from './account.model';
import { Injectable, Optional } from '@angular/core';
import { LoggerService } from '../util/logger.service';
//import { resolve } from 'path';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService{

  constructor(@Optional() private _logger: LoggerService) { }

  private _accounts: Array<Account> = [
    {
      id: 1,
      title: "Bank Fibank",
      description: "This is my main familly bank account",
      balance: 502.2
    },
    new Account(2, "OBB Bank", "This is my private account", 5000.50)
  ]

  public getAll(): Promise<Array<Account>> {
    return Promise.resolve(this._accounts);

  }
  private _nextId = 3;
  private accLimit: number = 4;

  public create(newAccount: Account) {

    return new Promise((resoleve, reject) => {
      if (this._accounts.length >= this.accLimit) {
        reject(`Maximum accounts limit reached`);
        return;
      }
      newAccount.id = this._nextId++;
      if (this._logger) 
        this._logger.log(`Account created: ${newAccount.title}`);
        this._accounts.push(newAccount);
        resoleve(newAccount);
      
    });
  }

    
  private removeAcc(index: number) {
    if (this._logger) {
      this._logger.log(`Account deleted: ${this._accounts[index].title}`);
      this._accounts.splice(index, 1)
    }
  
  }
}

export let ACCOUNT_SERVICE_PROVIDERS: Array<any> = [AccountServiceService, LoggerService];