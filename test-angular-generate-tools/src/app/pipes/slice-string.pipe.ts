import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sliceString'
})
export class SliceStringPipe implements PipeTransform {

  //...args or args: any[]
  transform(value: any, ...args): any {
    return value.slice(args[0], args[1]);
  }

}
