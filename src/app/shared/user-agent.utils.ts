
/**
 * Return true if it is a mobile device
 * @returns
 */
export function isMobile(): boolean {
  return !!navigator.userAgent.match(
    /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
  );
};


export function isAndroid(): boolean {
  return /android/i.test(navigator.userAgent.toLowerCase());
};

export function isIOS(): boolean {
  let reg = /iPhone|iPad|iPod|iOS|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
};
