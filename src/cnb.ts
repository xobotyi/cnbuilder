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
  if (typeof val === 'string') return val;

  if (typeof val !== 'object') return '';

  let str = '';
  let tmp;

  if (isArray(val)) {
    let i = 0;

    while (i < val.length) {
      tmp = toClassName(val[i++]);
      if (tmp) str += (str && ' ') + tmp;
    }
  } else {
    for (tmp in val) {
      if (val[tmp] && tmp) {
        str += (str && ' ') + tmp;
      }
    }
  }

  return str;
};

export function cnb(...args: ClassListArray): string;
export function cnb(): string {
  let i = 0;
  let tmp;
  let str = '';

  while (i < arguments.length) {
    tmp = toClassName(arguments[i++]);
    if (tmp) str += (str && ' ') + tmp;
  }

  return str;
}
