import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-guard',
  templateUrl: './demo-guard.component.html',
  styleUrls: ['./demo-guard.component.css']
})
export class DemoGuardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(account: string, pwd: string) {
    if (account === '123' && pwd === '123') {
      localStorage.setItem('user', JSON.stringify({account: account, password: pwd}));
    }
  }

}
