import calculator from "../calculator";

test(("respetive func should take two numbers and return the correct calculation"), () => {
    const addition = calculator.add(1, 1); // 2
    const subtraction = calculator.subtract(2, 1); // 1
    const division = calculator.divide(10, 2); // 5
    const multiplication = calculator.multiply(5, 5); // 25

    expect(addition).toBe(2);
    expect(subtraction).toBe(1);
    expect(division).toBe(5);
    expect(multiplication).toBe(25);
})