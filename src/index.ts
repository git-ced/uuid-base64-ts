import { parse, stringify } from 'uuid';

export const encodeUint8Array = (uint8Array: Uint8Array): string => (
  Buffer.from(uint8Array).toString('base64')
);

export const encode = (uuidv4: string): string => {
  const uint8Array = parse(uuidv4) as Uint8Array;
  const base64Encoded = encodeUint8Array(uint8Array);

  return base64Encoded.slice(0, -2);
};

export const decodeBase64 = (base64: string): Uint8Array => (
  new Uint8Array(Buffer.from(base64, 'base64'))
);

export const decode = (base64Encoded: string): string => {
  const base64 = `${base64Encoded}==`;
  const uint8Array = decodeBase64(base64);

  return stringify(uint8Array);
};
