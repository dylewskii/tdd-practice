const caesarCipher = (str, shift=0) => {
    const arrayToEncrypt = [...str];
    const alphabetMix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const higherIndexes = [];

    // Returns array of each letter's current alphabet position 
    const findPositions = function (originalArr) {
        const currentPositions = [];

        originalArr.forEach((letter, i) => {
            // spaces
            if (letter === " "){
                currentPositions.push(" ");
            // non-alphabetical characters
            } else if (!alphabetMix.includes(letter)){
                currentPositions.push(letter);
            // alphabetical characters
            } else if (alphabetMix.includes(letter)){
                // remember which letters are uppercase
                if (letter === letter.toUpperCase()) {
                    currentPositions.push(upperAlphabet.indexOf(letter));
                    higherIndexes.push(i);
                // push all lowercase letters normally
                } else {
                    currentPositions.push(lowerAlphabet.indexOf(letter));
                }
            } 
        })
        
        return currentPositions;
    }

    // Returns shifted letter positions
    const shiftPositions = function (positionsArr, shiftValue) {
        const shiftedPositions = [];

        positionsArr.forEach((pos) => {
            let newPos = pos + shiftValue;
            if (pos === " " || isNaN(pos)) {
                shiftedPositions.push(pos);
            } else if (newPos > 26){
                const overlap = newPos % 26;
                shiftedPositions.push(overlap);
            } else {
                shiftedPositions.push(newPos);
            }
        })

        return shiftedPositions;
    }

    // Returns encrypted array values
    const encryptValues = function (shiftedArr) {
        const encrypted = [];

        shiftedArr.forEach((value) => {
            // spaces
            if (value === " " || isNaN(value)){
                encrypted.push(value);
            // alphabetical characters
            } else {
                encrypted.push(lowerAlphabet[value]);
            }
        })

        return encrypted;
    }

    const current = findPositions(arrayToEncrypt);
    const shifted = shiftPositions(current, shift);
    const ciphered = encryptValues(shifted);

    higherIndexes.forEach((index) => {
        ciphered[index] = ciphered[index].toUpperCase();
    })
    
    return ciphered.join("");
};

module.exports = caesarCipher;