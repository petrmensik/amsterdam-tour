import { Pipe, PipeTransform } from '@angular/core';
import { toNumber } from 'lodash';

@Pipe({
  name: 'toNumber',
})
export class ToNumberPipe implements PipeTransform {

  transform(value: string): number {
    return parseFloat(value.replace(/,/g, '.'));
  }

}
