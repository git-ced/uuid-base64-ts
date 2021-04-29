// ANCHOR UUID
import { parse } from 'uuid';

// ANCHOR uuid-base64-ts
import {
  encode,
  decode,
  encodeUint8Array,
  decodeBase64,
} from '../src';

describe('uuidv4 to base64 encode', () => {
  it('should be the correct base64 encoded 22 character string', () => {
    const uuidv4 = '85c39545-533c-4587-bb1d-bad766908b1b';
    const base64Encoded = encode(uuidv4);

    expect(base64Encoded).toBe('hcOVRVM8RYe7HbrXZpCLGw');
    expect(base64Encoded.length).toBe(22);
  });
});

describe('uint8Array to base64 encode', () => {
  it('should be the correct base64 encoded string', () => {
    const uuidv4 = '85c39545-533c-4587-bb1d-bad766908b1b';
    const uint8Array = parse(uuidv4) as Uint8Array;
    const base64Encoded = encodeUint8Array(uint8Array);

    expect(base64Encoded).toBe('hcOVRVM8RYe7HbrXZpCLGw==');
    expect(base64Encoded.length).toBe(24);
  });
});

describe('base64 to uuidv4 decode', () => {
  it('should be the correct UUID v4', () => {
    const base64Encoded = 'hcOVRVM8RYe7HbrXZpCLGw';
    const uuidv4 = decode(base64Encoded);

    expect(uuidv4).toBe('85c39545-533c-4587-bb1d-bad766908b1b');
    expect(uuidv4.length).toBe(36);
  });
});

describe('base64 to uint8Array decode', () => {
  it('should be the correct uint8Array', () => {
    const base64Encoded = 'hcOVRVM8RYe7HbrXZpCLGw==';
    const uuidv4 = '85c39545-533c-4587-bb1d-bad766908b1b';
    const uint8Array = decodeBase64(base64Encoded);

    expect(uint8Array).toStrictEqual(parse(uuidv4));
  });
});
