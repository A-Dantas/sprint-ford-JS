
//class contato

let dadosDoCliente = [];

class contato {
    
    constructor (nome, sobrenome, cpf, email, telefone, meioContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.meioContato = meioContato;
    }
}

let form = document.getElementById("form");

form.addEventListener('submit', function(event) {
        event.preventDefault()
        Post(form)
        form.reset();
    });

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value, 
    form.elements.namedItem("cpf").value, 
    form.elements.namedItem("email").value, 
    form.elements.namedItem("telefone").value, 
    form.elements.namedItem("meioContato").value);
    
    dadosDoCliente.push(data)
    
    console.log(dadosDoCliente[0]);
    
    Enviar();

}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}