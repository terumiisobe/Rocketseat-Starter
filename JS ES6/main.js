/* exercicio 1 */
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}


class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());


/* exercicio 2 */
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

// 2.1
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

// 2.2
const usuario = usuarios.filter(u => u.idade >= 18 && u.empresa === 'Rocketseat');
console.log(usuario);

// 2.3
const usuarioGoogle = usuarios.find(u => u.empresa === 'Google');
console.log(usuarioGoogle);

// 2.4
const resultado = usuarios.map(usuario => ({...usuario, idade: usuario.idade * 2})).filter(usuario => usuario.idade < 50);
console.log(resultado);

