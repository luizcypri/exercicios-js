const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o caracter do indexe.
console.log(escola.charAt(5)) // retorna o caracter do indexe, como não existe ele retorna em branco.
console.log(escola.charCodeAt(3)) // retorna o numero ascii do caracter.
console.log(escola.indexOf('d')) // retorna o indexe do caracter solicitado.

console.log(escola.substring(1)) // retorna o restante da string apartir do indexe mencionado.
console.log(escola.substring(0,3)) // retorna a cadeia de caracteres apartir do inicio e fim do indexe mencionado.

console.log('Escola '.concat(escola).concat("!")) // retorna a junção da string mencionada.
console.log('Escola ' + escola + "!") // outro exemplo de junção.
console.log(escola.replace(3, 'e')) /* retorna a troca caracter solicitado, 
                                       sento o primeiro parametro o que existe na string 
                                       o segundo a que ira ser substituido.*/
console.log('Ana,Maria,Pedro'.split(',')) // retorna um array de caracteres.
