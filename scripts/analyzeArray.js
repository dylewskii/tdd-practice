const analyzeArray = (arr) => {
    const findAvg = (foo) => {
        const sum = foo.reduce((acc, curr) => acc + curr, 0);
        const length = foo.length;
        return sum / length;
    };

    const findMin = (foo) => {
        return Math.min(...foo);
    };

    const findMax = (foo) => {
        return Math.max(...foo);
    };

    const findLength = (foo) => {
        return foo.length;
    };

    const avg = findAvg(arr);
    const min = findMin(arr);
    const max = findMax(arr);
    const length = findLength(arr);

    return {
        average: avg,
        min: min,
        max: max,
        length: length
    }
}

module.exports = analyzeArray;