let pessoas = [];

function gerarId() {
    return Math.floor(Math.random() * 1000);
}

function cadastrarPessoa() {
    const nome = prompt("Digite o nome da pessoa:");
    const idade = prompt("Digite a idade da pessoa:");
    const cidade = prompt("Digite a cidade da pessoa:");

    const pessoa = {
        id: gerarId(),
        nome: nome,
        idade: idade,
        cidade: cidade
    };

    pessoas.push(pessoa);
    console.log("Pessoa cadastrada com sucesso!");
}

function atualizarPessoa() {
    const id = prompt("Digite o ID da pessoa que deseja atualizar:");
    const pessoaIndex = pessoas.findIndex(pessoa => pessoa.id == id);

    if (pessoaIndex === -1) {
        console.log("Pessoa não encontrada.");
        return;
    }

    const camposAtualizacao = prompt("Digite o nome dos campos que deseja atualizar (separados por vírgula):");
    const campos = camposAtualizacao.split(',');

    campos.forEach(campo => {
        if (campo.trim() in pessoas[pessoaIndex]) {
            pessoas[pessoaIndex][campo.trim()] = prompt(`Digite o novo valor para ${campo.trim()}:`);
        } else {
            console.log(`Campo '${campo.trim()}' inválido.`);
        }
    });

    console.log("Pessoa atualizada com sucesso!");
}

function deletarPessoa() {
    const id = prompt("Digite o ID da pessoa que deseja deletar:");
    const pessoaIndex = pessoas.findIndex(pessoa => pessoa.id == id);

    if (pessoaIndex === -1) {
        console.log("Pessoa não encontrada.");
        return;
    }

    pessoas.splice(pessoaIndex, 1);
    console.log("Pessoa deletada com sucesso!");
}

function listarPessoa() {
    console.log("Lista de Pessoas:");
    console.log(pessoas);
}