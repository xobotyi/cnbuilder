export type ClassValue = string | null | boolean | undefined | ClassListDictionary | ClassListArray;

export type ClassListArray = ClassValue[];

export interface ClassListDictionary {
  [cn: string]: boolean | undefined | null;
}
