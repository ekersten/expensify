const add = (a,b) => a + b;
const getGreeting = (name = 'Anonymous') => {
    return `Hello ${name}!`;
}


test('should add 2 numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should generate greeting', () => {
    const result = getGreeting('Eric');
    expect(result).toBe('Hello Eric!');
})

test('should generate greeting with no name', () => {
    const result = getGreeting();
    expect(result).toBe('Hello Anonymous!');
})