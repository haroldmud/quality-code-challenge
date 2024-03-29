const nestedArray = [1,2,[3,4,[5,6]],[7]]

function handleNestedArray(nest){
    const split = JSON.stringify(nest).split("");
    const countLevel = []
    for(i=0; i<split.length; i++){
        if(split[i] === "["){
            countLevel.push(split[i])
        }
    }
    return countLevel.length;
}

const level = handleNestedArray(nestedArray) //4
const flatArray = nestedArray.flat(level);

console.log(flatArray) //[1, 2, 3, 4, 5, 6, 7]
