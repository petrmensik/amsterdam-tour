import { GetYearPipe } from './get-year.pipe';

describe('GetYearPipe', () => {
  const momentSerivceSpy = jasmine.createSpyObj('MomentService', ['parseDate']);

  it('create an instance', () => {
    const pipe = new GetYearPipe(momentSerivceSpy);
    expect(pipe).toBeTruthy();
  });
});
