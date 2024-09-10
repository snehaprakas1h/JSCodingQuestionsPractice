const input = [1, [2, 3], [4, [5, 6]], 7];

//using traditional for loop
const flattenArrayRecursive = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArrayRecursive(arr[i]));
        }
        else {
            result.push(arr[i]);
        }
    }

    return result;
}

//using in-build method reduce
const flattenArrayReduce = (arr) =>{
    return arr.reduce((acc,val) => Array.isArray(val)? acc.concat(flattenArrayReduce(val)) : acc.concat(val),[]);
}

//using in-build method flat
const flattenArrayFlat = (arr) => arr.flat(Infinity);

console.log(flattenArrayRecursive(input));
console.log(flattenArrayReduce(input));
console.log(flattenArrayFlat(input));



