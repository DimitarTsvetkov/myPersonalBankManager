import { AccountServiceService, ACCOUNT_SERVICE_PROVIDERS } from './account/account-service.service';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountsListComponent } from './account/accounts-list.component';
import { Account } from './account/account.model';
import { Component, ViewChild, Injector } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [AccountsListComponent, AccountFormComponent]
  providers:[ACCOUNT_SERVICE_PROVIDERS]
})
export class AppComponent {
  private _accounts: Array<Account> = [];

  private _accountService: AccountServiceService;

  constructor(accountService: AccountServiceService) {
    this._accountService = accountService;
    var promise = this._accountService.getAll();
    promise.then(accounts => this._accounts = accounts);
  }

  private createAccError:string ="";
  private createAcc(newAccount: Account) {
    this._accountService.create(newAccount).then(account =>{console.log(account);
    this.createAccError = "";
    this.form.resetForm();
  }).catch(err =>this.createAccError = err);
    
  }
  
  private removeAcc(index: number) {
    this._accounts.splice(index)

  }


  @ViewChild(AccountFormComponent) form:AccountFormComponent;


}






















  // private _accounts: Array<Account> = [
  //   {
  //     id: 1,
  //     title: "Bank Fibank",
  //     description: "This is my main familly bank account",
  //     balance: 502.2
  //   },
  //   new Account(2, "OBB Bank", "This is my private account", 5000.50)
  // ]

  // private _nextId = 3;

  // private createAccError: string = "";
  // private accLimit: number = 4;
  // private createAcc(newAccount: Account) {
  //   this.createAccError = "";
  //   if (this._accounts.length < this.accLimit) {
  //     newAccount.id = this._nextId++;
  //     this._accounts.push(newAccount);

  //     this.form.resetForm();
  //   } else {
  //     this.createAccError = `Only ${this.accLimit} account(s) are allowed`;

  //   }

  // }
  // private removeAcc(index: number) {
  //   this._accounts.splice(index, 1)

  // }

// @ViewChild(AccountFormComponent) form:AccountFormComponent;

