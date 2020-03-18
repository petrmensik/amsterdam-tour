import { Pipe, PipeTransform } from '@angular/core';
import { MomentService } from '@amst/core';

@Pipe({
  name: 'getYear',
})
export class GetYearPipe implements PipeTransform {
  constructor(
    private momentService: MomentService,
  ) { }

  transform(value: string): string {
    return value ? this.momentService.parseDate(value).get('year').toString() : '';
  }

}
