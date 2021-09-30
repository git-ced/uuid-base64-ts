// ANCHOR UUID
import { stringify } from 'uuid';

// ANCHOR Utils
import decodeBase64 from './decodeBase64';

export default function decode(base64Encoded: string): string {
  const base64 = `${base64Encoded}==`;
  const uint8Array = decodeBase64(base64);

  return stringify(uint8Array);
}
