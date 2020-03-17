import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationSlice',
})
export class PaginationSlicePipe implements PipeTransform {

  transform<T>(value: T[], pageIndex: number, pageSize: number): T[] {
    const sliceStart: number = pageIndex * pageSize;
    const sliceEnd: number = sliceStart + pageSize;
    return value.slice(sliceStart, sliceEnd);
  }
}
