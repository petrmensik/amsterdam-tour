import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'translate' })
export class TranslateMockPipe implements PipeTransform {
  transform(key: string): string {
    return key;
  }
}
