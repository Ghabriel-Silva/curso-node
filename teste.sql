/*Criando uma tabela usuarios dentro do banco de dados*/
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100), 
    idade INT
);

ALTER TABLE usuarios ADD id INT; /*Adicionando uma nova coluna*/

/*Inserindo dados dentro da minha tabela*/
INSERT INTO  usuarios (nome, email, idade) VALUES(
    "Gabriel silva", 
    "ghaabriel@gmail.com",
    23
);

/*Inserindo dados no ID*/



INSERT INTO usuarios(nome, email, idade) VALUES(
    "Ketlin Ribeiro", 
    "ketlin@gmail.com", 
    21
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Rafael Silva", 
    "rafan@gmail.com", 
    23
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Josiane Aparecida", 
    "josi@gmail.com", 
    45
);

/*Editnado dados existente em uma Tabela*/
UPDATE usuarios SET nome = "Gabriel" where id = 1;

