module.exports = function reverse (n) {
  return Number(Math.abs(n).toString().split('').reverse().join(''));
//OR
//   let absN = Math.abs(n);
//   let reversedN = '';

//   for (let i = absN.length - 1; i >= 0; i--) {
//     reversedN += absN[i];
//   }

//   return +reversedN;
}
