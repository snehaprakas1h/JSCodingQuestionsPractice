const intArray = [1, 4, 5, 6, 7, 8, 9];

const findLargest = (arr) => {
    firstLargestValue = Math.max(...arr);
    index = arr.indexOf(firstLargestValue)
    arr.splice(index, 1);
    secondLargestValue = Math.max(...arr);
    console.log(arr);
    return secondLargestValue;

}

console.log(findLargest(intArray));

// filter vs find method

const empArray = [{
    name: 'a', age: 23
}, {
    name: 'b', age: 26
},
{
    name: 'c', age: 30
},
{
    name: 'd', age: 24
},
{
    name: 'e', age: 20
},
{
    name: 'f', age: 36
},
]

const findFilterEmp = empArray.filter((item) => {
        return item.age > 25;
});

const findEmp = empArray.find((item) => {
    return item.age > 25;
});

console.log(findFilterEmp);
console.log(findEmp);
