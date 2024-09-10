//require devolve um objeto, que será o select. Estamos importando módulos/bibliotecas.
const { select } = require('@inquirer/prompts')

//Ou function start() {}
//Sempre que você tiver "await" na func, vai precisarescreve assim a const: const async start
//await significa que o seu código está esperando que uma function "select" cumpra a promessa de trazer uma resposta positiva ou negativa em relação ao pedido do cliente.
const start = async () => {
    while(true){
        
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "Cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
}

start()