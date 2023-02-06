import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let input = value;
    let result = input.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');

    return result;
  }

}
