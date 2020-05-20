const valores =[7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // retorna a quantidade de valores do array

valores.push({id: 3}, false, null,'teste') // add mais valores no array
console.log(valores)

console.log(valores.pop()) // retorna o ultimo valor do array
delete valores[0] // retira o valor do array específico
console.log(valores)

console.log(typeof valores) // retorna o tipo do objeto