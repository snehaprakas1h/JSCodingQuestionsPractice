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

const input = [1, [2, 3], [4, [5, 6]], 7];

console.log(flattenArrayRecursive(input));

