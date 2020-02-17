import dcnb from '../src/dcnb';

describe('cnbuilder (dedupe version)', () => {
  it('should build from strings', () => {
    expect(dcnb('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('should dedupe classnames inside strings', () => {
    expect(dcnb('foo', 'bar foo', 'baz')).toBe('foo bar baz');
  });

  it('should build from array', () => {
    expect(dcnb(['foo', 'bar', 'baz'])).toBe('foo bar baz');
  });

  it('should build from nested arrays', () => {
    expect(dcnb(['foo', ['bar', 'baz']])).toBe('foo bar baz');
  });

  it('should dedupe classnames inside string entries of array', () => {
    expect(dcnb(['foo', 'bar foo', ['baz bar', 'foo']])).toBe('foo bar baz');
  });

  it('should build from objects', () => {
    expect(
      dcnb({
        foo: true,
        bar: true,
        baz: true,
        bax: false,
      }),
    ).toBe('foo bar baz');
  });

  it('should dedupe classnames set to false in object keys', () => {
    expect(
      dcnb(
        {
          foo: true,
          bar: true,
          baz: true,
        },
        { baz: false },
      ),
    ).toBe('foo bar');
  });
});
