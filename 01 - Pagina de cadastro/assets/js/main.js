const tabela = document.getElementById('tabela');

function criarLinhaDaTabela () {
    const campoNome = document.getElementById('nome').value;
    const campoCpf = document.getElementById('cpf').value;
    const campoEmail = document.getElementById('email').value;
    const campoEndereco = document.getElementById('endereco').value;
    const campoNascimento = document.getElementById('nascimento').value;

    const novaLinha = document.createElement("tr");
    novaLinha.setAttribute("class", "linha");

    const novoNome = document.createElement("td");
    novaLinha.appendChild(novoNome);
    novoNome.innerHTML = campoNome;
    novoNome.setAttribute("class", "tabela-item");

    const novoCpf = document.createElement("td");
    novaLinha.appendChild(novoCpf);
    novoCpf.innerHTML = campoCpf;
    novoCpf.setAttribute("class", "tabela-item");

    const novoEmail = document.createElement("td");
    novaLinha.appendChild(novoEmail);
    novoEmail.innerHTML = campoEmail;
    novoEmail.setAttribute("class", "tabela-item");

    const novoEndereco = document.createElement("td");
    novaLinha.appendChild(novoEndereco);
    novoEndereco.innerHTML = campoEndereco;
    novoEndereco.setAttribute("class", "tabela-item");

    const novoNascimento = document.createElement("td");
    novaLinha.appendChild(novoNascimento);
    novoNascimento.innerHTML = campoNascimento;
    novoNascimento.setAttribute("class", "tabela-item");

    const botaoExcluir = document.createElement("input");
    novaLinha.appendChild(botaoExcluir);
    botaoExcluir.setAttribute("onclick", "removerUltimaLinhaDaTabela ();");
    botaoExcluir.setAttribute("class", "apagar");
    botaoExcluir.setAttribute("value", "excluir");
    botaoExcluir.style.width = "2.5rem";

    const botaoEditar = document.createElement("input");
    novaLinha.appendChild(botaoEditar);
    botaoEditar.setAttribute("onclick", "editarUltimaLinhaDaTabela ();");
    botaoEditar.setAttribute("class", "editar");
    botaoEditar.setAttribute("value", "editar");
    botaoEditar.style.width = "2.5rem";

    tabela.appendChild(novaLinha);
}

function removerUltimaLinhaDaTabela () {
    const linhas = document.getElementsByClassName("linha");
    const ultimaLinha = linhas[linhas.length -1];
    tabela.removeChild(ultimaLinha);
}

function editarUltimaLinhaDaTabela () {
    removerUltimaLinhaDaTabela ();
}
