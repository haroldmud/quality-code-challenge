function solution (roman) {
  const romanObject={
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let result = 0;
  let previousValue = 0;
  for(let i=roman.length-1; i >= 0; i--){
    let value = romanObject[roman[i]];
    if( value >= previousValue){
      result += value;
    }else{
      result -= value;
    }
    previousValue = value;
  }
	return result;
}
