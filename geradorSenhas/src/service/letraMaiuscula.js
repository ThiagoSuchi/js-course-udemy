export function gerarComCaracterMaiuculo(length) {
    const caracteres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let result = ""

    for(let i = 0; i < length; i++) {
        const index = String(Math.floor(Math.random() * caracteres.length));
        result += caracteres[index]
    }

    return result
}