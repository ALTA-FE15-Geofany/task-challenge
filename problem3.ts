type Char = {
    char: string
}
function makeDiamond(input: Char): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const char = input.char.toUpperCase()
    const charIndex = alphabet.indexOf(char)

    if (charIndex === -1) {
        console.log('input error')
    }

    const numRows = charIndex * 2 + 1
    let diamond = ''

    for (let i = 0; i < numRows; i++) {
        const currentRow = i <= charIndex ? i : numRows - i - 1
        const leadingSpaces = charIndex - currentRow
        const letter = alphabet[currentRow]

        if (currentRow === 0) {
            const row = ' '.repeat(leadingSpaces) + letter
            diamond += row + '\n'
        } else {
            const trailingSpaces = currentRow * 2 - 1
            const row = ' '.repeat(leadingSpaces) + letter + ' '.repeat(trailingSpaces) + letter
            diamond += row + '\n'
        }
    }

    return diamond
}

const char: Char = {
    char: "m"
}

console.log(char)
console.log(makeDiamond(char))
