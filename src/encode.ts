// ANCHOR UUID
import { parse } from 'uuid';

// ANCHOR Utils
import encodeUint8Array from './encodeUint8Array';

export default function encode(uuidv4: string): string {
  const uint8Array = parse(uuidv4) as Uint8Array;
  const base64Encoded = encodeUint8Array(uint8Array);

  return base64Encoded.slice(0, -2);
}
