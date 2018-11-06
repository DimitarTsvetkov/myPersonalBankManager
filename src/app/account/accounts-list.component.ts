import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Account } from '../account/account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: '../account/accounts-list.component.html',
  styleUrls: ['../account/accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {




  @Input('accounts') _accounts: Array<Account>;
  @Output('delete') delete = new EventEmitter<Number>();

  private _remove(index: number) {

    this.delete.emit(index);
  }

  constructor() { }

  ngOnInit() {
  }

}
