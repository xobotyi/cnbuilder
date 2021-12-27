/* eslint-disable no-cond-assign */
export type ClassValue =
  | string
  | null
  | boolean
  | undefined
  | IClassListDictionary
  | ClassListArray;

export type ClassListArray = ClassValue[];

export interface IClassListDictionary {
  [cn: string]: any; // it can be anything
}

const { isArray } = Array;

const toClassName = (val: any): string => {
  let str = '';

  if (typeof val === 'string') str += val;
  else if (typeof val === 'object') {
    let tmp;

    if (isArray(val)) {
      let i = 0;
      const l = val.length;
      while (i < l) {
        tmp = toClassName(val[i++]);
        if (tmp) {
          if (str) {
            str += ' ';
          }
          str += tmp;
        }
      }
    } else {
      // eslint-disable-next-line guard-for-in
      for (tmp in val) {
        if (tmp && val[tmp]) {
          if (str) {
            str += ' ';
          }
          str += tmp;
        }
      }
    }
  }

  return str;
};

export function cnb(...args: ClassListArray): string;
export function cnb(): string {
  const l = arguments.length;
  let i = 0;
  let n;
  let tmp;
  let str = '';

  while (i < l) {
    n = arguments[i++];
    if (n) {
      tmp = toClassName(n);
      if (tmp) {
        if (str) {
          str += ' ';
        }
        str += tmp;
      }
    }
  }

  return str;
}
