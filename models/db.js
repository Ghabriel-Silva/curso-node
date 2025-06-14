const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    'cadastros',
    'root', //user banco de dados
    '@Gs189970',
    {
        host: "localhost",
        dialect: 'mysql'
    }
)
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida.')
    })
    .catch((error) => {
        console.log('Erro ao conectar com o banco de dados:', error)
    })

//Criando um tabela no banco de dados
const Postagem = sequelize.define('postagem', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

//Criando tabelas
/*Postagem.create({
        titulo: 'Testando banco de dados!',
        conteudo: 'e quiser, posso te ajudar a criar validadores personalizados'
    })
*/



const Usuario = sequelize.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false, //campo n pode ser null
        validate: {
            max: 20
        }

    },
    sobrenome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    }
})



//Usuario.sync({force: true})

module.exports = sequelize