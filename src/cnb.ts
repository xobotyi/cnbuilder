import { ClassListArray, ClassValue } from './types';

const { isArray } = Array;

const toVal = (val: ClassValue): string => {
  if (!val) return '';

  if (typeof val === 'string') return val;

  if (typeof val !== 'object') return '';

  let str = '';
  let tmp;
  let l;

  if (isArray(val)) {
    l = val.length;

    if (l === 0) return '';

    if (l === 1) return toVal(val[0]);

    let i = 0;

    while (i < l) {
      tmp = toVal(val[i++]);

      if (tmp) str += (str && ' ') + tmp;
    }

    return str;
  }

  for (tmp in val) {
    if (val[tmp] && tmp) {
      str += (str && ' ') + tmp;
    }
  }

  return str;
};

export function cnb(...args: ClassListArray): string;
export function cnb(): string {
  const l = arguments.length;

  if (l === 0) return '';

  if (l === 1) return toVal(arguments[0]);

  let i = 0;
  let str = '';
  let tmp;

  while (i < l) {
    tmp = toVal(arguments[i++]);

    if (tmp) str += (str && ' ') + tmp;
  }

  return str;
}
