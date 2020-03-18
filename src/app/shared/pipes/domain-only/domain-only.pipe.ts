import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domainOnly',
})
export class DomainOnlyPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    const urlName: string = value.replace(/http(s?):\/\//, '');
    return urlName.substring(0, urlName.indexOf('/') === -1 ? urlName.length : urlName.indexOf('/'));
  }
}
