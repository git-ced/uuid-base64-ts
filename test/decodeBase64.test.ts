// ANCHOR UUID
import { parse } from 'uuid';

// ANCHOR uuid-base64-ts
import { decodeBase64 } from '../src';

describe('base64 to uint8Array decode', () => {
  it('should be the correct uint8Array', () => {
    const base64Encoded = 'hcOVRVM8RYe7HbrXZpCLGw==';
    const uuidv4 = '85c39545-533c-4587-bb1d-bad766908b1b';
    const uint8Array = decodeBase64(base64Encoded);

    expect(uint8Array).toStrictEqual(parse(uuidv4));
  });
});
