// ANCHOR UUID
import { parse } from 'uuid';

// ANCHOR uuid-base64-ts
import { encodeUint8Array } from '../src';

describe('uint8Array to base64 encode', () => {
  it('should be the correct base64 encoded string', () => {
    const uuidv4 = '85c39545-533c-4587-bb1d-bad766908b1b';
    const uint8Array = parse(uuidv4) as Uint8Array;
    const base64Encoded = encodeUint8Array(uint8Array);

    expect(base64Encoded).toBe('hcOVRVM8RYe7HbrXZpCLGw==');
    expect(base64Encoded.length).toBe(24);
  });
});
