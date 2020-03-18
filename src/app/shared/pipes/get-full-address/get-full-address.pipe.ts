import { Pipe, PipeTransform } from '@angular/core';
import { compact } from 'lodash';
import { ILocation } from '@amst/core';

@Pipe({
  name: 'getFullAddress',
})
export class GetFullAddressPipe implements PipeTransform {

  transform(value: ILocation, arg: { withZip?: boolean } = {}): string {
    return compact([
      value?.adress,
      value?.city,
      arg.withZip ? value?.zipcode : '',
    ]).join(', ');
  }

}
