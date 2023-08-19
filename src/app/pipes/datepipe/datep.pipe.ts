import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datep'
})
export class DatepPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    var day = value.substring(8);
    var month = value.substring(5,7);
    var year = value.substring(0,4);
    return `${day}/${month}/${year}`;
  }

}
