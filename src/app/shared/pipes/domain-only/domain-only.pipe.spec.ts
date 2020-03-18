import { DomainOnlyPipe } from './domain-only.pipe';

describe('DomainOnlyPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new DomainOnlyPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should not modify url with good format', () => {
    expect(pipe.transform('www.google.com')).toBe('www.google.com');
  });

  it('should modify url', () => {
    expect(pipe.transform('https://www.google.com/sub-page?query=param')).toBe('www.google.com');
  });
});
