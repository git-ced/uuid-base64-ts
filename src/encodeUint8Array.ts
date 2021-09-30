export default function encodeUint8Array(uint8Array: Uint8Array): string {
  return Buffer.from(uint8Array).toString('base64');
}
