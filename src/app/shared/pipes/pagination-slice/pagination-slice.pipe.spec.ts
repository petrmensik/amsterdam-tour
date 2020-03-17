import { PaginationSlicePipe } from './pagination-slice.pipe';

describe('PaginationSlicePipe', () => {
  let pipe: any;
  const alphabet: string[] = ['a', 'b', 'c', 'd', 'e'];

  beforeEach(() => {
    pipe = new PaginationSlicePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should slice array from start', () => {
    expect(pipe.transform(alphabet, 0, 2)).toEqual(['a', 'b']);
  });

  it('should slice array in the middle', () => {
    expect(pipe.transform(alphabet, 1, 2)).toEqual(['c', 'd']);
  });

  it('should slice array in the end', () => {
    expect(pipe.transform(alphabet, 2, 2)).toEqual(['e']);
  });
});
