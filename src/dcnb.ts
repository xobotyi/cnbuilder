import { ClassListArray, ClassValue } from './types';

const SPACE_REGEX = /\s+/;
const { create } = Object;
const { isArray } = Array;

/* istanbul ignore next */
// eslint-disable-next-line @typescript-eslint/no-empty-function
function Storage(): void {}
/* istanbul ignore next */
Storage.prototype = create(null);

function addVal(val: ClassValue, storage: object): void {
  if (!val) return;

  let l;

  if (typeof val === 'string') {
    val = val.split(SPACE_REGEX);
    l = val.length;

    for (let i = 0; i < l; i++) storage[val[i] as string] = true;

    return;
  }

  if (typeof val !== 'object') return;

  if (isArray(val)) {
    l = val.length;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    for (let i = 0; i < l; i++) addVal(val[i], storage);

    return;
  }

  let i;
  // eslint-disable-next-line guard-for-in
  for (i in val) storage[i] = !!val[i];
}

export function dcnb(...args: ClassListArray): string;
export function dcnb(): string {
  const l = arguments.length;

  const storage = new Storage();

  for (let i = 0; i < l; i++) addVal(arguments[i], storage);

  let str = '';

  let i;
  for (i in storage) if (storage[i] && i) str += (str && ' ') + i;

  return str;
}
