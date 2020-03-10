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


/* exercicio 3 */
// 3.1
const arr = [1, 2, 3, 4, 5];

let arr0 = arr.map(function(item) {
    return item + 10;
    });
console.log(arr0);

let arr1 = arr.map(item => item + 10);
console.log(arr1);

// 3.2
// Dica: Utilize uma constante pra function
const usuarioDiego = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
return usuario.idade;
}
console.log(mostraIdade(usuarioDiego));

const mostraIdade0 = usuario => {return usuario.idade};
console.log(mostraIdade0(usuarioDiego));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const mostraUsuario0 = (nome = 'Diego', idade = 18) => ({nome, idade});
console.log(mostraUsuario0(nome, idade));
console.log(mostraUsuario0(nome));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {return resolve();
    })
}
console.log(promise());

const promise0 = () => {return new Promise((resolve, reject) => resolve())};   
console.log(promise0());

/* exercicio 4 */
// 4.1
const empresa = {
    nome0: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome0, endereco: {cidade}, endereco: {estado}} = empresa;
console.log(nome0);
console.log(cidade);
console.log(estado); 

// 4.2
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

/* exercicio 5 */
// 5.1
const arrxy = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arrxy;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...a) => {
    return a.reduce((total,next) => total + next);
}

console.log(soma(1,2,3,4));

// 5.2
const usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario1, nome: 'Gabriel'};
console.log(usuario2);
const usuario3 = { ...usuario1, endereco: {cidade: 'Lontras'}};
console.log(usuario3);

/* exercicio 6 */
const usuariobt = 'Diego';
const idadebt = 23;
console.log(`O usuário ${usuariobt} possui ${idadebt} anos`);

/* exercicio 7 */
const nome4 = 'Diego';
const idade4 = 23;
const usuario4 = {
    nome4,
    idade4,
    cidade: 'Rio do Sul',
};
console.log(usuario4);
