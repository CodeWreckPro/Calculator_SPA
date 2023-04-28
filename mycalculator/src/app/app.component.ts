import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycalculator';
  toshow = '0'
  currvalue = ''
  store: any
  writetoinput(value : string) {
    if(this.currvalue == '0'){
      this.currvalue = ''
    }
    if(this.currvalue != '0'){
      this.currvalue = this.currvalue + value;
    }
    this.toshow = this.currvalue;
  }

  equals() {
    this.toshow = eval(this.currvalue)
    this.currvalue = this.toshow
    this.toshow = this.currvalue
  }

  clear() {
    this.currvalue = '';
    this.toshow = '0'
  }

  back() {
    this.currvalue = this.currvalue.slice(0,-1)
    this.toshow = this.currvalue
    if(this.currvalue == '') {
      this.toshow = '0';
    }
  }

  calcvalue(solve : any) {
    if(solve.charAt(0) == '0') {
      solve = solve.slice(1,)
    }
    if(solve.charAt(-1) == '+' || solve.charAt(-1) == '-' || solve.charAt(-1) == '*' || solve.charAt(-1) == '/') {
      solve = solve.slice(0,-1)
    }
    this.toshow = eval(solve)
  }
}
