const usuarios = [];

function adicionarUsuario(nome, idade, email) {
    if (!nome || (idade <= 0) || !email) {
        console.error("Preencha todas as colunas");
        return;
    }  const UsuarioNovo = { nome, idade, email };
    usuarios.push(UsuarioNovo);
}

function listarUsuarios() {
    console.log("Usuários cadastrados são:");
    usuarios.forEach((usuario) => { 
        console.log(`Nome: ${usuario.nome},  Idade: ${usuario.idade},  Email: ${usuario.email}`);
    });
}

adicionarUsuario("Kaua", 16, "kaua@estudante.sesisenai.com");
adicionarUsuario("Ana", 16, "ana@estudante.sesisenai.com");
listarUsuarios();