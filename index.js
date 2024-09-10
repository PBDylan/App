//Variáveis
let mensagem = "Hello Dydy!"
let number = 2

//Constante
const mensagem_2 = "Tchau Dydy!"

// hello world!
console.log("hello world!");
console.log(number);
console.log(mensagem);
console.log(mensagem_2);

//Sobre escopos, {} se trata de escopos diferentes, dentro de {} é local, enquanto o que está fora é global. Ele vem antes de global se tiver uma chamada "console.log" por exemplo.

{
    const mensagem_2 = "Hy Pereira!"
    console.log(mensagem_2)
}

//Arrays, objetos
//Listas ordenas e/ou organizadas são arrays
//["indice_0", "indice_1"]
let metas = ["dylan", "alo"]

//Os + são para concatenação
console.log(metas[1] + ", " + metas[0])

//Objeto = {}
let meta = {
    value: 'ler um livro todo mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

meta.log(meta.value)

//Function // arrow function
//const criarMeta = () => {}

//function criarMeta() {}