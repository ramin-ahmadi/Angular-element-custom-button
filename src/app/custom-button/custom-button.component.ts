import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-framework-vote',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CustomButtonComponent implements OnInit {


  @Input() label: string;
  @Output() buttonClick = new EventEmitter<number>();


  clickCount = 0;
 
  constructor() { }
  ngOnInit() {
  
  }

  clicks(){
      this.clickCount++;
      this.label="you have clicked " + this.clickCount +" times";
      this.buttonClick.emit(this.clickCount);
  
  }

}
