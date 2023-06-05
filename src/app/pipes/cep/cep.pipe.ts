import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): unknown {

    if (value != undefined) {
      if (value.length < 8) {
        return value
      } else {
        return value.replace(/(\d{5})(\d{3})/g, '\$1\-\$2');
      }
    }
    return value;
  }

}
