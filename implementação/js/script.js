dados = []

function submeterDados(){
    nome = document.getElementById('nome').value;
    telefone = document.getElementById('telefone').value;
    email = document.getElementById('email').value;
    facebook = document.getElementById('facebook').value;
    instagram = document.getElementById('instagram').value;
    dado = [nome, telefone, email, facebook, instagram]
    dados.push(dado);
    limpar()
    listar()

}

function listar(){
    for (i=0; i<dados.length; i++){
        alert("Nome:" + dados[i][0]+"\nTelefone:" + dados[i][1]+"\nemail" + dados[i][2] +"\nfacebook"[i][3]+ "\ninstagaram" + dados[i][4] )

    }

}
function limpar(){
    alert("Dado inserido com sucesso!");
    document.getElementById('nome').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('email').value = "";
    document.getElementById('facebook').value = "";
    document.getElementById('instagram').value = "";
}
