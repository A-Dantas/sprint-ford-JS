
//class contato

let dadosDoCliente = [];

class contato {
    
    constructor (nome, email, telefone, contato) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
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
    form.elements.namedItem("email").value, 
    form.elements.namedItem("telefone").value, 
    form.elements.namedItem("contato").value);
    // form.elements.namedItem("cpf").value, 
    //form.elements.namedItem("sobrenome").value, 
    
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