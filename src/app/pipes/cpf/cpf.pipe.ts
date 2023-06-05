import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    const input = value;
    var result = ''

    if (input != undefined) {
      if (input.length < 11) {
        return input
      } else {
        result = input.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '\$1.\$2.\$3\-\$4');
        return result;
      }
    }
    return input;
  }

}
