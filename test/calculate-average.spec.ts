import fc from 'fast-check';
import { calculateAverage } from '../src';
import { expect } from 'chai';

describe('calculateAverage', () => {
  it('should return a number when input is an array of numbers', () => {
    fc.assert(
      fc.property(fc.array(fc.oneof(fc.integer(), fc.float())), (numbers) => {
        const result = calculateAverage(numbers);
        return typeof result === 'number';
      })
    );
  });
  it('should return zero when array is empty', () => {
    const result = calculateAverage([]);
    expect(result).to.eql(0);
  });
  it('should work when input contains null or undefined values', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.oneof(fc.integer(), fc.constant(null), fc.constant(undefined))
        ),
        (numbers) => {
          const result = calculateAverage(numbers);
          return typeof result === 'number';
        }
      )
    );
  });
  it('should work when input contains Infinity values', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.oneof(fc.integer(), fc.constant(Infinity), fc.constant(-Infinity))
        ),
        (numbers) => {
          const result = calculateAverage(numbers);
          return typeof result === 'number';
        }
      )
    );
  });
});
