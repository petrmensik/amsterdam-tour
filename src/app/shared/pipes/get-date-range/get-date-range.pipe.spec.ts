import { GetDateRangePipe } from './get-date-range.pipe';

describe('GetDateRangePipe', () => {
  const momentServiceSpy = jasmine.createSpyObj('MomentService', ['parseDate']);

  it('create an instance', () => {
    const pipe = new GetDateRangePipe(momentServiceSpy);
    expect(pipe).toBeTruthy();
  });
});
