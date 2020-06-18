import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    if(value && args){
      switch(args[0]){
        case 'HT':
          return value.tjmHt * value.nbJours;
        case 'TTC':
          return (value.tjmHt * value.nbJours) * (1 + (value.tva / 100));
      }
    }

    return null;
  }

}
