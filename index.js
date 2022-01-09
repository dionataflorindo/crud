let listaRegistros = {
    ultimoIdgerado:0,
    usuario:[]
}

function renderizarTabela(){
    const tbody = document.getElementById('listaRegistrosBody');
    if(tbody){
        tbody.innerHTML = listaRegistros.usuario
        .sort((a,b)=>{
            return a.nome < b.nome ? -1 : 1 
        })
        .map(usuario =>{
            return `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.telefone}</td>
                    <td>${usuario.data}</td>
                    <td>${usuario.nota}</td>
                    <td>
                        <button class= "del" onclick = "confirmarExclusao(${usuario.id})">Deletar</button>
                    </td>

                </tr>`

        }).join('')

    }

}

function inserirAluno(nome,telefone,data,nota){
    const id = listaRegistros.ultimoIdgerado + 1;
    listaRegistros.ultimoIdgerado = id;
    listaRegistros.usuario.push({
        id,nome,telefone, data,nota
    });
    renderizarTabela();
    visualizar('lista');
    alert('aluno cadastrado com sucesso')
}

function deletarAluno(id){
    listaRegistros.usuario = listaRegistros.usuario.filter(usuarios =>{
        return usuarios.id != id
    })
    renderizarTabela();


}

function confirmarExclusao(id){
    if(confirm('Deseja deletar este aluno?' + id)){
        deletarAluno(id);
    }

}


function visualizar(pagina){
   document.body.setAttribute('page', pagina)
}

function enviar(e){
    e.preventDefault();
    const data = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('tel').value,
        data: document.getElementById('data').value,
        nota: document.getElementById('nota').value,
    }

    if(data.id){
                
    }else{
        inserirAluno(data.nome, data.telefone,data.data,data.nota)
    }
}



window.addEventListener('load',()=>{
    renderizarTabela();
    document.getElementById('cadastroRegistros').addEventListener('submit', enviar)

});


