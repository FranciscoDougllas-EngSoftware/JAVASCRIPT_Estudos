//Funcao para valida usuarios

function validaUsuario(usuario, senha){
    let usuarioValido = "admin";
    let senhaValida = "123456";

    if(usuario === usuarioValido && senha === senhaValida){
        return `Usuário válido!` //retorna mensagem de sucesso
    }else{
        return `Usuario ou senha inválidos!` //retorna mensagem de erro
    }
    return; //sai da função
}

let usuario = "admin"; //usuario
let senha = "123456"; //senha
console.log(validaUsuario(usuario, senha)); //chama a função

let usuario2 = "amando";
let senha2 = "ab2324";
console.log(validaUsuario(usuario2, senha2)); //chama a função