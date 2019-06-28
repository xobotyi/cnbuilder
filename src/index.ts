export type ClassValue = string | null | boolean | undefined | ClassListDictionary | ClassListArray;

export interface ClassListDictionary {
  [cn: string]: boolean | undefined | any;
}

export interface ClassListArray extends Array<ClassValue> {}

const h = Object.prototype.hasOwnProperty;

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

    if (item.push) {
      if (item.length && (item = reduceArray(item))) {
        str && (str += " "), (str += item);
      }
    } else {
      for (n in item) {
        if (h.call(item, n) && item[n] && n) {
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
