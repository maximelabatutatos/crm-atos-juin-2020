import { Directive, Input, HostBinding, OnInit, OnChanges, DoCheck } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements DoCheck {

  @Input() appHighlight: { data:string, expression:string };
  @HostBinding('class') nomClass: string;

  constructor() { }

  ngDoCheck(): void {
    if(this.appHighlight.expression && this.appHighlight.data.toLowerCase().includes(this.appHighlight.expression.toLowerCase())){
      this.nomClass = "highlight";
    }else{
      this.nomClass = undefined;
    }
  }

}
