import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ca'
})
export class CaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    if(value && args){
      switch(args[0]){
        case 'TTC':
          return value.ca * (1 + (value.tva / 100));
      }
    }

    return null;
  }

}
