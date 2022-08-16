import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export function scrollToElementById(id: string): void {
  let top = document.getElementById(id);
  if (top) {
    setTimeout(() => {
      top?.scrollIntoView({block: "end"});
      top = null;
    }, 10)
  }
}


export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};


export function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};


export function convertCommaDecimalNumberToNumber(num: string): number {
  if (num) {
    const stripped = num.trim();
    return parseFloat(stripped.replace(/,/g, ''));
  }
  return NaN;
}


export function insertIntoArrayAtIndex<T>(arr: T[], index: number, item: T): T[] {
  const arrCopy: T[] = JSON.parse(JSON.stringify(arr));
  arrCopy.splice(index, 0, item);
  return arrCopy;
}


export function isNumeric(val: any): boolean {
  if (typeof val === 'number') {
    return true;
  }
  return !isNaN(+val) && !isNaN(parseFloat(val + ''));
}


export function getThingType(value: any) {
  const match = Object.prototype.toString.call(value).match(/ (\w+)]/)
  return match ? match[1].toLocaleLowerCase() : 'N/A';
}


export function capitalizeFirstLetter(str: string): string | undefined {
  if (str) {
    return (str.charAt(0).toUpperCase()) + str.slice(1);
  }
  return undefined;
}


export function getLocaleNumber(num: any): string {
  return (+num).toLocaleString(undefined);
}


export function objectsEqual(o1: any, o2: any): boolean {
  return typeof o1 === 'object' && Object.keys(o1).length > 0
  ? Object.keys(o1).length === Object.keys(o2).length
      && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
  : o1 === o2;
}


export function arraysEqual(a1: any[], a2: any[]): boolean {
  if (a1 && a2) {
    return a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));
  }
  return false;
}


export function removeEmptyFromObject(obj: any): any {
  if (!obj) {
    return {};
  }
  const result = JSON.parse(JSON.stringify(obj));
  Object.keys(result).forEach((key) => {
    if (result[key] === null || result[key] === undefined) {
      delete result[key];
    }
  });
  return result;
}


export function isObjectEmpty(obj: any): boolean {
  if (obj) {
    const keys = Object.keys(obj);
    return keys.length < 1;
  }
  return false;
}


// Remove objects in an array if the object has the same value by key provided
export function deduplicateObjectArrayByKey<T>(arr: T[], key: string): T[] {
  if (arr && arr.length > 0) {
    const uniqueByValues: any[] = arr.map((res: T) => res[key as keyof T]);
    const filtered = arr.filter((res: T, index: number) => {
      return !uniqueByValues.includes(res[key as keyof T], index + 1);
    });
    return filtered;
  }
  return [];
}


/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
 export function humanFileSize(bytes: number, si=false, dp=1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}


