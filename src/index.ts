export type Class = string | ClassObject | ClassArray;

export interface ClassObject {
  [key: string]: boolean | any;
}

export interface ClassArray extends Array<Class> {}

export default function cnb(...args: ClassArray): string {
  return <string>(
    (args.length
      ? args.length > 1
        ? args.reduce(arrayReducer, "")
        : arrayReducer("", args[0])
      : "")
  );
}

const arrayReducer = (result: string, item: Class): string => {
  let type = typeof item;

  if (type === "string") {
    return item ? result + (result && " ") + item : result;
  }

  let tmp = "";

  if (Array.isArray(item)) {
    tmp = <string>(
      (item.length
        ? item.length > 1
          ? item.reduce(arrayReducer, "")
          : arrayReducer("", item[0])
        : "")
    );

    return tmp ? result + (result && " ") + tmp : result;
  }

  if (type !== "object") {
    return result;
  }

  for (let i in <ClassObject>item) {
    if (item.hasOwnProperty(i) && item[i]) {
      tmp += (tmp && " ") + i;
    }
  }

  return tmp ? result + (result && " ") + tmp : result;
};
