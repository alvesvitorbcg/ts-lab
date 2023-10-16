import fc from 'fast-check';

function add(a: number, b: number) {
  return a + b;
}

describe('add', () => {
  it('should be commutative', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        console.log(a, b);
        return add(a, b) === add(b, a);
      })
    );
  });
  it('should be associative', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), fc.integer(), (a, b, c) => {
        console.log(a, b, c);
        return add(a, add(b, c)) === add(add(a, b), c);
      })
    );
  });
});
