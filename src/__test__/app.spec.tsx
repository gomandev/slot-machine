function addSum(num1: number, num2: number): number {
  return num1 + num2;
}
describe('Checking test case', () => {
  it('Checks for addSum functions', () => {
    expect(addSum(7, 3)).toBe(10);
  });
});

export {};
