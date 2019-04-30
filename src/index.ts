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

const arrayReducer = (result: string, item: ClassValue): string => {
  const type = typeof item;

  if (type === "string") {
    return item ? result + (result && " ") + item : result;
  }

  if (Array.isArray(item)) {
    const tmp = item.length
      ? item.length > 1
        ? item.reduce(arrayReducer, "")
        : arrayReducer("", item[0])
      : "";

    return tmp ? result + (result && " ") + tmp : result;
  }

  if (type === "object" && item) {
    let tmp = "";

    for (const i in <ClassListDictionary>item) {
      if (item[i] && item.hasOwnProperty(i)) {
        tmp += (tmp && " ") + i;
      }
    }

    return tmp ? result + (result && " ") + tmp : result;
  }

  return result;
};

export const cnb = function cnb(...args: ClassListArray): string {
  return <string>(
    (args.length
      ? args.length > 1
        ? args.reduce(arrayReducer, "")
        : arrayReducer("", args[0])
      : "")
  );
};
export default cnb;
