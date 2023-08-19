import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): unknown {
      const statusTranslations: { [key: string]: string } = {
        IN_PROGRESS: 'Em atendimento',
        SCHEDULED: 'Agendado',
        CONFIRMED: 'Confirmado',
        CANCELED: 'Cancelado',
        COMPLETED: 'Concluido'
      };

      return statusTranslations[value] || value;
    
  }

}
