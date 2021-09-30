describe('username password to basic token', () => {
  it('should be the correct uint8Array', () => {
    const base64Encoded = Buffer.from('sk_test_51JQfk5JugrF9PYAhmadYWANcn8ECyLdV67x4fK6nsCRm1WnBVel1IcQ0bHp7C1mCeXxQvNJPqWZBb6FRMhycgkUp00FexFZ1MU:').toString('base64');
    const basicToken = `Basic ${base64Encoded}`;

    expect(basicToken).toStrictEqual('Basic c2tfdGVzdF81MUpRZms1SnVnckY5UFlBaG1hZFlXQU5jbjhFQ3lMZFY2N3g0Zks2bnNDUm0xV25CVmVsMUljUTBiSHA3QzFtQ2VYeFF2TkpQcVdaQmI2RlJNaHljZ2tVcDAwRmV4RloxTVU6');
  });
});
