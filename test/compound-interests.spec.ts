import fc from 'fast-check';
import { calculateInterests } from '../src/helpers';
import { expect } from 'chai';
describe('calculateCompoundInterests', () => {
  it('should return a number when amount, rate and time are positive integers', () => {
    fc.assert(
      fc.property(
        fc.record({
          amount: fc.integer({ min: 0 }),
          rate: fc.integer({ min: 0 }),
          time: fc.integer({ min: 0 }),
        }),
        ({ amount, rate, time }) => {
          const result = calculateInterests({ amount, rate, time });
          return typeof result === 'number';
        }
      )
    );
  });
  it('should return NaN when time is NaN', () => {
    fc.assert(
      fc.property(
        fc.record({
          amount: fc.integer({ min: 0 }),
          rate: fc.integer({ min: 0 }),
          time: fc.constant(NaN),
        }),
        ({ amount, rate, time }) => {
          const result = calculateInterests({ amount, rate, time });
          return isNaN(result);
        }
      )
    );
  });
  it('should return NaN when rate is NaN', () => {
    fc.assert(
      fc.property(
        fc.record({
          amount: fc.integer({ min: 1 }),
          time: fc.integer({ min: 0 }),
          rate: fc.constant(NaN),
        }),
        ({ amount, rate, time }) => {
          const result = calculateInterests({ amount, rate, time });
          return isNaN(result);
        }
      )
    );
  });
  it('should return NaN when amount is NaN', () => {
    fc.assert(
      fc.property(
        fc.record({
          rate: fc.integer({ min: 0 }),
          time: fc.integer({ min: 0 }),
          amount: fc.constant(NaN),
        }),
        ({ amount, rate, time }) => {
          const result = calculateInterests({ amount, rate, time });
          return isNaN(result);
        }
      )
    );
  });
  it('should return zero when input is an object with amount, rate and time equal to zero', () => {
    const result = calculateInterests({ amount: 0, rate: 0, time: 0 });
    expect(result).to.eql(0);
  });
});
