import { Account } from './account.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.blue-bg{background-color:blue;}']
})
export class AppComponent {
  private _accounts: Array<Account> = [
    {
      id: 1,
      title: "Bank Fibank",
      description: "This is my main familly bank account",
      balance: 502.2
    },
    new Account(2, "OBB Bank", "This is my private account", 5000.50)
  ]
  private _nextId = 3
  private createAcc(titleEl: any, descEl: any, balEl: any) {
    this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value))
    this._nextId++
    titleEl.value = ""
    descEl.value = ""
    balEl.value = ""
  }
  private removeAcc(index:number){
    this._accounts.splice(index,1)
  }

}