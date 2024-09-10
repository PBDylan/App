//require devolve um objeto, que será o select. Estamos importando módulos/bibliotecas.
const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})

//length significa número de caracteres
    if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return
    }

    metas.push(
        { value: meta, checked: false }
    )

}

const listaMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    if (respostas.length == 0) {
        console.log("Nenhuma meta selecionada!")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log('Meta(s) marcadas como concluídas(s)')

}


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
            case "Cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listaMetas()
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
}

start()