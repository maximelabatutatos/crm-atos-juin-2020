import { Directive, Input, HostBinding, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StateOrder } from '../enums/state-order.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges{

  @Input() appState: string;
  @HostBinding('class') nomClass: string;

  constructor() {
  }

  ngOnChanges(){
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: string): string{
    return `state-${state.toLocaleLowerCase()}`
  }

}
