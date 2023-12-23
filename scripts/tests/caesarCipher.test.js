import caesarCipher from "../caesarCipher";

test(("return correctly 'shifted' string, using shift value provided"), () => {
        const testOne = caesarCipher("hello world", 3) // khoor zruog
        expect(testOne).toBe("khoor zruog");
})

test(("return 'shifted' string, including uppercase letters"), () => {
        const testTwo = caesarCipher("HELLO WORLD", 3) // KHOOR ZRUOG
        expect(testTwo).toBe("KHOOR ZRUOG");
})

test(("return 'shifted' string, including punctuation"), () => {
        const testThree = caesarCipher("!Hello World!", 3) // !Khoor Zruog!
        expect(testThree).toBe("!Khoor Zruog!");
})

test(("return the 'shifted' string, ensuring to wrap from z to a"), () => {
        const testFour = caesarCipher("Go to the zoo", 3) // Jr wr wkh crr
        expect(testFour).toBe("Jr wr wkh crr");
})