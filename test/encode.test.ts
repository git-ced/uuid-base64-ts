// ANCHOR uuid-base64-ts
import { encode } from '../src';

describe('uuidv4 to base64 encode', () => {
  it('should be the correct base64 encoded 22 character string', () => {
    const uuidv4 = '85c39545-533c-4587-bb1d-bad766908b1b';
    const base64Encoded = encode(uuidv4);

    expect(base64Encoded).toBe('hcOVRVM8RYe7HbrXZpCLGw');
    expect(base64Encoded.length).toBe(22);
  });
});
