/*
console.log("hello world")
console.info("info")
console.warn('warning')
console.error("error")

console.table([
    {id: 1, tarefa: 'Estudar'},
    {id: 2, tarefa: 'Praticar'}
])

console.group('Grupo de logs')
console.log('Log 1')
console.log('Log 2')
console.groupEnd()

console.time('Timer')

console.timeEnd('Timer')

var antigo = 'valor da variavel'

console.log(antigo)


let variaveMutavel= 2

variaveMutavel = 3

const variavelImutavel = 1

console.log(variavelMutavel)
*/

//Tipo de dados primitivos

/*
let ='Texto'
console.log(typeof texto)

let numero = 0
console.log(typeof numero)

let isCompleted = false
console.log(typeof isCompleted)

let semValor 
console.log(typeof semValor)

let nulo = null
console.log(typeof nulo)

let uniqueId = Symbol('id')
console.log(typeof uniqueId)

let bigNumero = 99999999n
console.log(typeof bigNumero)
*/

let tarefa = {id: 1, tarefa:'Estudar JS'}
console.log(tarefa)
console.log(tarefa.id)
console.log(tarefa.tarefa)

let tasks = [
    {id: 1651, tarefa: 'Estudar JS'},
    {id: 2984, tarefa: 'Praticar Codigo'},
    {id: 3465, tarefa: 'sexo'}
]

console.log(tasks)
console.log(tasks[0], tasks[1])
console.log(tasks[2]['id'])

let hoje = new Date()
console.log(hoje)

let pattern = /^[a-z+]$/i;
console.log(pattern)

