var inputStr = "we are good people";

const firstStrCaps = (str) =>{
    var newStr = str.split(' ');
    var newArr = newStr.map((value)=>{
        return value.charAt(0).toUpperCase()+value.slice(1);
    })

    return newArr.join(' ');
}

console.log(firstStrCaps(inputStr));