import { Account } from './../account/account.model';
import { Component, Output, EventEmitter, OnInit, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  @Output('created') created = new EventEmitter<Account>();

  

  private createAcc(titleEl: any, descEl: any, balEl: any) {
    var newAccount: Account = new Account(0, titleEl.value, descEl.value, balEl.value)
    this.created.emit(newAccount);

    
  }
  @Input() error:string;
  @ViewChild('form') form:ElementRef;

  public resetForm(){
    this.form.nativeElement.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
