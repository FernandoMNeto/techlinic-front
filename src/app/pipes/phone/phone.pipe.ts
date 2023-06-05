import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    const input = value;
    var result = ''

    if (input != undefined) {
      if (input.length < 11) {
        return input
      } else {
        result = input.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
        return result;
      }
    }
    return input;
  }

}
