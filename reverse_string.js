function reverseVowels(str) {
  const vowels = [];
  const string = str.split('');
  const sample = ["a","e","i","o","u","A","E","I","O","U"];
  for(i=0; i<string.length; i++){
    if(sample.includes(string[i])){
      vowels.push(string[i])
    }
  }
  const reverseVowel = vowels.reverse();
  const result = string.map((element)=>{
    if(sample.includes(element)){
      return vowels.shift()
    }
    return element
  })
  return result.join('')
}
