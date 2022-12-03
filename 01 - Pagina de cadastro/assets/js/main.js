const tabela = document.getElementById('tabela');

function criarLinhaDaTabela () {
    const varNome = document.getElementById('nome').value;
    const varCpf = document.getElementById('cpf').value;
    const varEmail = document.getElementById('email').value;
    const varEndereco = document.getElementById('endereco').value;
    const varNascimento = document.getElementById('nascimento').value;
    const varPrimeiroContato = document.getElementById('primeiro_contato').value;
    const varSegundoContato = document.getElementById('segundo_contato').value;

    const novaLinha = document.createElement("tr");
    novaLinha.setAttribute("class", "linha");

    const novoNome = document.createElement("td");
    novaLinha.appendChild(novoNome);
    novoNome.innerHTML = varNome;
    novoNome.setAttribute("class", "tabela-item");

    const novoCpf = document.createElement("td");
    novaLinha.appendChild(novoCpf);
    novoCpf.innerHTML = varCpf;
    novoCpf.setAttribute("class", "tabela-item");

    const novoEmail = document.createElement("td");
    novaLinha.appendChild(novoEmail);
    novoEmail.innerHTML = varEmail;
    novoEmail.setAttribute("class", "tabela-item");

    const novoEndereco = document.createElement("td");
    novaLinha.appendChild(novoEndereco);
    novoEndereco.innerHTML = varEndereco;
    novoEndereco.setAttribute("class", "tabela-item");

    const novoNascimento = document.createElement("td");
    novaLinha.appendChild(novoNascimento);
    novoNascimento.innerHTML = varNascimento;
    novoNascimento.setAttribute("class", "tabela-item");

    const novoPrimeiroContato = document.createElement("td");
    novaLinha.appendChild(novoPrimeiroContato);
    novoPrimeiroContato.innerHTML = varPrimeiroContato;
    novoPrimeiroContato.setAttribute("class", "tabela-item");

    const novoSegundoContato = document.createElement("td");
    novaLinha.appendChild(novoSegundoContato);
    novoSegundoContato.innerHTML = varSegundoContato;
    novoSegundoContato.setAttribute("class", "tabela-item");

    tabela.appendChild(novaLinha);
}

cadastrar.addEventListener('click', ()=>{
    criarLinhaDaTabela ();
})

function removerUltimaLinhaDaTabela () {
    const linhas = document.getElementsByClassName("linha");
    const ultimaLinha = linhas[linhas.length -1];
    tabela.removeChild(ultimaLinha);
}

apagar.addEventListener('click', ()=>{
    removerUltimaLinhaDaTabela ();
})