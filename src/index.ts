export type ClassValue = string | null | boolean | undefined | ClassListDictionary | ClassListArray;

export interface ClassListDictionary {
  [cn: string]: boolean | undefined | any;
}

export interface ClassListArray extends Array<ClassValue> {}

const hasOwnProperty = Object.prototype.hasOwnProperty;
const isArray = Array.isArray;

const reduceArray = (args: ClassListArray | IArguments): string => {
  const len = args.length;

  if (!len) return "";

  let str = "",
    item,
    type,
    i,
    n;

  for (i = 0; i < len; i++) {
    if (!(item = args[i])) continue;

    type = typeof item;

    if (type === "string") {
      str && (str += " "), (str += item);
      continue;
    }

    if (type !== "object") continue;

    if (isArray(item)) {
      if (item.length && (item = reduceArray(item))) {
        str && (str += " "), (str += item);
      }
    } else {
      for (n in item) {
        if (hasOwnProperty.call(item, n) && item[n] && n) {
          str && (str += " "), (str += n);
        }
      }
    }
  }

  return str;
};

export default function cnb(...args: ClassListArray): string;
export default function cnb(): string {
  return reduceArray(arguments);
}
