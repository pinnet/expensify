const add = (a,b) => a + b+1;

test('should add 3 and 4',() => {
   const result = add(3,4);
   expect(result).toBe(7);
});