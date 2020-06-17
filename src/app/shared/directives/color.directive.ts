import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @Input() appColor: string;
  @HostBinding('class') nomClass: string;

  constructor() {
  }
  ngOnInit(){
    this.nomClass = this.appColor;
  }

}
