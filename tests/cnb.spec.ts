import { cnb } from '../src';

describe('cnb', () => {
  it('should be defined', () => {
    expect(cnb).toBeDefined();
  });

  it('should return empty string if called w/o arguments', () => {
    expect(cnb()).toBe('');
  });

  it('should build from various amount of strings', () => {
    expect(cnb('a')).toBe('a');
    expect(cnb('a', 'b', 'c')).toBe('a b c');
  });

  it('should build from various amount of arrays', () => {
    expect(cnb([])).toBe('');
    expect(cnb(['a'])).toBe('a');
    expect(cnb(['a', 'b'], ['c'])).toBe('a b c');
  });

  it('should build from various amount of objects', () => {
    expect(cnb({ '': true })).toBe('');
    expect(cnb({ a: true })).toBe('a');
    expect(cnb({ a: true, b: true }, { c: true })).toBe('a b c');
  });

  it('should not include falsy entries', () => {
    expect(cnb('')).toBe('');
    expect(cnb([''])).toBe('');
    expect(cnb('a', 'b', 'c', '')).toBe('a b c');
    expect(cnb(['a'], ['b', 'c'], [''])).toBe('a b c');
    expect(cnb({ a: true }, { b: true, c: true }, { '': true })).toBe('a b c');
    expect(cnb({ a: true, d: false }, { b: true, c: true }, { '': true })).toBe('a b c');
  });

  it('should ignore invalid entries', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(cnb(NaN, undefined, null, 123, () => {}, [null, NaN])).toBe('');
  });
});
