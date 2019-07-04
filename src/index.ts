export type ClassValue = string | null | boolean | undefined | ClassListDictionary | ClassListArray;

export interface ClassListDictionary {
  [cn: string]: boolean | undefined | null;
}

export interface ClassListArray extends Array<ClassValue> {}

const hasOwnProperty = Object.prototype.hasOwnProperty;
const isArray = Array.isArray;

export default function cnb(...args: ClassListArray): string;
export default function cnb(): string {
  const len = arguments.length;

  if (!len) return "";

  let str = "",
    item,
    i,
    n;

  for (i = 0; i < len; i++) {
    if (!(item = arguments[i])) continue;

    if (typeof item === "string") {
      str && (str += " "), (str += item);
      continue;
    }

    if (typeof item !== "object") continue;

    if (item.push && isArray(item)) {
      if ((item = cnb.apply(this, item))) {
        str && (str += " "), (str += item);
      }

      continue;
    }

    for (n in item) {
      if (hasOwnProperty.call(item, n) && item[n] && n) {
        str && (str += " "), (str += n);
      }
    }
  }

  return str;
}
