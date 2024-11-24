
var isPalindrome = function(str) {
    const lettersAndNums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
     't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const lowerCaseString = str.toLowerCase();
    const stringWithoutChar = lowerCaseString.split('').filter((char) => {
        return lettersAndNums.includes(char);
    });
     
    return stringWithoutChar.join('') === stringWithoutChar.reverse().join('');
};

const isPalindrome2 = (str) => {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let start = 0;
    let end = cleanedStr.length - 1;

    while (start < end) {
        if (cleanedStr[start] !== cleanedStr[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

const numArray = [1, 2, 3, 4, 5, 6];
numArray.pop()
console.log(numArray)

const nameSort = (arr) => {
    const nameMap = {};
    arr.forEach((name) => {
        const firstLetter = name[0];
        if(!nameMap[firstLetter]){
           nameMap[firstLetter] = [];
        }
        nameMap[firstLetter].push(name)
    })
   return nameMap;
}


const sumPositions = (arr, sum) => {
    const sumMap = {};
    for(i = 0; i <= arr.length; i++){
        const num = arr[i];
        if(!sumMap[num]){
            sumMap[num] = true;
        }
        if(sumMap[sum - num]){
            return [sum -num, num];
        }
    }
}







