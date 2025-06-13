const {Sequelize} = require('sequelize');
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
.then(()=>{
    console.log('Conexão com o banco de dados bem-sucedida.')
})
.catch((error)=>{
    console.log('Erro ao conectar com o banco de dados:', error)
})

module.exports = sequelize