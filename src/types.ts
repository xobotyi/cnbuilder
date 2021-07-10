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
