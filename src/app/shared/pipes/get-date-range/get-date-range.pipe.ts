import { Pipe, PipeTransform } from '@angular/core';
import { IEventDates, MomentService } from '@amst/core';

@Pipe({
  name: 'getDateRange',
})
export class GetDateRangePipe implements PipeTransform {

  constructor(
    private momentService: MomentService,
  ) { }

  transform(value: IEventDates): string {
    const from = this.momentService.parseDate(value.startdate)?.format('L');
    const to = this.momentService.parseDate(value.enddate)?.format('L');
    return [from, to].filter(d => !!d).join(' - ');
  }
}
