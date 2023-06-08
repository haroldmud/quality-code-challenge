const originalArray = [11,11,22,33,4,5];

function DuplicateRemoval(sample){
   return [...new Set(sample)]
}

console.log(DuplicateRemoval(originalArray)
