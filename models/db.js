const { Sequelize } = require("sequelize");

/*
 O Sequelize é um ORM (Object Relational Mapping) que facilita a conexão e manipulação 
 de dados entre o banco de dados e o backend. Para utilizá-lo, é necessário instalar o Sequelize
 e também o driver correspondente ao banco de dados escolhido. Neste exemplo, estamos usando o MySQL.
*/

const sequelize = new Sequelize(
    "cadastrs",       // Nome do banco de dados que será acessado
    "root",           // Nome do usuário do banco de dados
    "@Gs189970",      // Senha do banco de dados
    {
        host: "localhost", // Endereço do servidor do banco de dados
        dialect: "mysql"   // Tipo de banco de dados utilizado
    }
);

// Testa a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
    })
    .catch((error) => {
        console.log("Erro ao conectar com o banco de dados:", error);
    });

/*
 Exporta a conexão configurada para ser utilizada em outros arquivos do projeto.
 Aqui usamos `module.exports` para tornar os objetos disponíveis externamente.
*/
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

/*
 OBS:
 - Para testar a conexão, você pode executar este arquivo com o comando: `nodemon db.js`
   (estando dentro da pasta correta no terminal com `cd models`, por exemplo).
 - Se a conexão for bem-sucedida, a mensagem "Banco de dados conectado com sucesso!" será exibida.
 - Caso contrário, será exibido o erro detalhado.
*/
