import reverseString from "../reverseString";

test(("returns a reversed string"), () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
})