// ANCHOR uuid-base64-ts
import { decode } from '../src';

describe('base64 to uuidv4 decode', () => {
  it('should be the correct UUID v4', () => {
    const base64Encoded = 'hcOVRVM8RYe7HbrXZpCLGw';
    const uuidv4 = decode(base64Encoded);

    expect(uuidv4).toBe('85c39545-533c-4587-bb1d-bad766908b1b');
    expect(uuidv4.length).toBe(36);
  });
});
