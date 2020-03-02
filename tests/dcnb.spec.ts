import { dcnb } from '../src';

describe('dcnb', () => {
  it('should be defined', () => {
    expect(dcnb).toBeDefined();
  });

  it('should not include falsy entries', () => {
    expect(dcnb('')).toBe('');
    expect(dcnb([''])).toBe('');
    expect(dcnb('a', 'b', 'c', '')).toBe('a b c');
    expect(dcnb(['a'], ['b', 'c'], [''])).toBe('a b c');
    expect(dcnb({ a: true }, { b: true, c: true }, { '': true })).toBe('a b c');
    expect(dcnb({ a: true, d: false }, { b: true, c: true }, { '': true })).toBe('a b c');
  });

  it('should return empty string if called w/o arguments', () => {
    expect(dcnb()).toBe('');
  });

  it('should build from various amount of strings', () => {
    expect(dcnb('a a a')).toBe('a');
    expect(dcnb('a b', 'b c', 'c a')).toBe('a b c');
  });

  it('should build from various amount of arrays', () => {
    expect(dcnb([])).toBe('');
    expect(dcnb(['a a a'])).toBe('a');
    expect(dcnb(['a', 'b a'], ['c b'])).toBe('a b c');
  });

  it('should build from various amount of objects', () => {
    expect(dcnb({ '': true })).toBe('');
    expect(dcnb({ a: true })).toBe('a');
    expect(
      dcnb(
        { a: true, b: true, d: true },
        { c: true, d: false },
        {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          d: () => {},
        },
      ),
    ).toBe('a b d c');
  });

  it('should ignore invalid entries', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(dcnb(NaN, undefined, null, 123, () => {}, [null, NaN])).toBe('');
  });
});
