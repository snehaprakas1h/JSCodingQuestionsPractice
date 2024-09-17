let inputStr = 'E';
inputStr = inputStr.toLowerCase();

const findVowels = (inp) => {
    if(inputStr == 'a' || inputStr == 'e' ||inputStr == 'i' ||inputStr == 'o' ||inputStr == 'u'){
        console.log(`${inputStr} is a vowel`);
    }
    else{
        console.log(`${inputStr} is a vowel`);
    }
}

let inputcountstr ='photosynthesis';
const findVowelCount = (str) =>{
    let count =0;
    const vowels = ['a','e','i','o','u'];
    for (let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }

    return count;
}

findVowels(inputStr);
console.log(findVowelCount(inputcountstr));

