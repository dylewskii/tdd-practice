import capitalize from "../capitalize";

test("returns a string with the first character capitalized.", () => {
    expect(capitalize("hello world")).toBe("Hello world");
})