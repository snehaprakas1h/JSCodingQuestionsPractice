let inputStr = "madam";

inputStr = inputStr.toLowerCase();

const findPalindrome = (str) =>{
    let checkStr = str.split("").reverse().join("");
    if(str === checkStr){
        return true;
    }
    else{
        return false
    }
}

console.log(findPalindrome(inputStr));