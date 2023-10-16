function calculateInterests({ amount, rate, time }) {
  return amount * Math.pow(1 + rate / 100, time);
}
export default calculateInterests;
