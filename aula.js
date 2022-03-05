// JSON
/////////////////////////////////////////////////////////////////////////////

// let p = {
//     nome: "Maria",
//     idade: 22,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 44,
//         bairro: "Vila K"
//     }

// }

// console.log(p['endereco'].logradouro)
// console.log(p.endereco['logradouro'])
// console.log(p['endereco']['logradouro'])
// console.log(p.endereco.logradouro)


///////////////////////////////////////////
// let pessoa = {
//     nome: "João",
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

/////////////////////////////////////////////////////////////////////////////////
// function map (v, f){
//     let aux = []
//     for(let i = 0; i < v.length; i++ ){        
//             aux.push(f(v[i]))
//     }
//     return aux
// }

// //["a", "d"]
// console.log(map (["abc", "def"], (e) => e.charAt(0)))
// console.log(map (["abc", "def"], (e) => e.length))

// ////Imprementar filter
// function filter(v, f){
//     let aux=[]
//     for (let i =0 ; i < v.length; i++){
//         if (f(v[i])){
//             aux.push(v[i])
//         }
//     }
//     return aux
// }

// ////tem que exibir [2]
// console.log(filter ([1,2], (n) => n % 2 == 0))
////////////////////////////////////////////////////////////////////////////////

//higher-oder function

// let umaFuncao = function (){
//     console.log ("Fui Armazenada em uma variavel")
// }
// umaFuncao()

// const triplo = n => 3 *  n
// console.log (triplo(5))

// const dobro = n => 2 * n
// const dobro = (n) => 2 * n
// const dobro = (n) => {
//     return 2 * n
// }

// const hello = () => console.log("Hellor")
// hello()


// const dobro = function (n){
//     return 2 * n
// }

// consle.log(dobro(5))


// function soma (a, b){
//     return a + b
// }

// const res = soma (2,3)
// console.log (res)


// function hello(){
//     console.log("hello")
// }
// hello()

// function hello(nome){
//     console.log("Hello, " + nome)
// }
// hello("Jose")



// const valores = [1,2,3,4]
// const soma = valores.reduce((ac, v) => ac + v) // ac = acumulado // v = proximo valor
// console.log(soma)

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
// const todosComecamComA = nomes.every(nome => nome.startsWith("A"))
// console.log(todosComecamComA)

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
// //const res = nome.map ((nome) => nome.charAt(0))
// const res = nomes.map ((nome) => nome.length)
// console.log(res)


// // () => {} //arrow function
// const apenasA = nones.filter((n) => {
//     return n.startWith("A")
// });
// console.log(apenasA)

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