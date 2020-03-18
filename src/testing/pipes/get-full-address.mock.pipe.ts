import { Pipe, PipeTransform } from '@angular/core';
import { ILocation } from '@amst/core';

@Pipe({ name: 'getFullAddress' })
export class GetFullAddressMockPipe implements PipeTransform {
  transform(val: ILocation): string {
    return 'Mocked address, City';
  }
}
