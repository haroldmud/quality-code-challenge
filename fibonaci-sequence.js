function fibonacciSequence(n) {
  let SEQUENCE = [];
 
  if (n >= 1) {
    sequence.push(0);
  }
  
  if (n >= 2) {
    sequence.push(1);
  }
  
  for (let i = 2; i < n; i++) {
    let nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }
  
  return sequence;
}
