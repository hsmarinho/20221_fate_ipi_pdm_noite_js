const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// () => {} //arrow function
const apenasA = nones.filter((n) => {
    return n.startWith("A")
});
console.log(apenasA)

// const numeros = [1, 2]
// numeros[0] = 2
// console.log(numeros)
// numeros = [1, 2]




// v1 = []
// console.log(v1.length)

// v1[0] = 1.3
// v1[10] = 2
// v1[2] = true

// console.log(v1.length)
// for (let i = 0; i< v1.length; i++){
//     console.log(v1[i])
// }

//==
//===


// const a = []
// const b = a
// console.log(a == b)

// console.log([] == [])
// console.log([] == false)

// console.log(null == undefined)
// console.log(null == null)
// console.log(1 == [1])
// console.log(true == 1)
// console.log(1 == 1)
// console.log(1 == "1") //coerção implissita - resultado true
// console.log(1 ==="1") // === faz a comparação por tipo de dados antes de comparar os valores.



// const n1 = 2
// const n2 = '3'

// const n3 = n1 + n2
// console.log(n3)

// const n4 = n1 Number(n2)
// console.log(n4)

// var idade =18
// console.log("oi, " + nome)
// if (idade >= 18){
//     //var utiliza içamento "hoist" (o escopo da variavel não é restrito ao bloco)
//     var nome = "João"
//     // console.log("Parabéns, " + nome +"você pode dirigir")
//     console.log(`Parabéns ${nome}. Voce pode dirigir`)
// }

// console.log("Até mais, " + nome)

// //começando...
// const nome = "José" //declaração de constante
// const idade  = 27

// let a = 2
// let b = "abc"
// let endereco = `rua k, 12` //declarar string con crase pode ter quebra de linha

// var c = 2+3
// var d = "abcd"