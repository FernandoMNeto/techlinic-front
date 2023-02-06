import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    let input = value;
    let result = input.replace(/(\d{5})(\d{3})/g, '\$1\-\$2');

    return result;
  }

}
