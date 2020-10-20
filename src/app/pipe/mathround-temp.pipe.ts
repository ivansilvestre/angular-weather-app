import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathroundTemp'
})
export class MathroundTempPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }

}
