import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-freespee';
  outPutValue = '';
  outPutLength = 0;
  outPutCalc = 0;
  hasCalcError = false;
  displayCalc = false;

  addToOutput(dial:any) {
    this.outPutValue += dial;
  }

  calculate() {
    this.outPutCalc = 0;
    if(this.outPutValue) {
      this.outPutLength = this.outPutValue.length;
    }
    for(let i=1;i<=this.outPutLength;i++) {
      if(this.outPutValue.charAt(i-1).match(/^[0-9]/) != null) {
        this.outPutCalc += Number(this.outPutValue.charAt(i-1));
      }
      else if(i == this.outPutLength) {
        if(this.outPutValue.charAt(i-1).match(/#/)) {
          this.displayCalc = true;
        }
      } else {
        this.hasCalcError = true;
      }
    }
  }

}
