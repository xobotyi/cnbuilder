export type ClassValue =
  | string
  | null
  | boolean
  | undefined
  | ClassListDictionary
  | ClassListArray;

export interface ClassListDictionary {
  [cn: string]: boolean | undefined | any;
}

export interface ClassListArray extends Array<ClassValue> {}

const isArray = Array.isArray;
const hasProp = Object.prototype.hasOwnProperty;

const arrayReduce = (args: ClassListArray | IArguments): string => {
  let res = "",
    len = args.length,
    item,
    type,
    i,
    n;

  for (i = 0; i < len; i++) {
    if (!args[i]) {
      continue;
    }
    item = args[i];
    type = typeof item;

    if (type === "string") {
      res += (res && " ") + item;
      continue;
    }

    if (isArray(item)) {
      if ((item = arrayReduce(item))) {
        res += (res && " ") + item;
      }

      continue;
    }

    if (type === "object") {
      for (n in item) {
        if (hasProp.call(item, n) && item[n] && n) {
          res += (res && " ") + n;
        }
      }
    }
  }

  return res;
};

export const cnb = <{ (...args: ClassListArray): string }>function cnb() {
  return arrayReduce(arguments);
};
export default cnb;
