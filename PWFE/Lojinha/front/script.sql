CREATE DATABASE lojinha charset=UTF8 collate utf8_general_ci;
USE lojinha;

CREATE TABLE produtos (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    cod VARCHAR(10) NOT NULL UNIQUE,
    nome VARCHAR(50) NOT NULL,
    qntd INTEGER NOT NULL,
    preco FLOAT(5, 2) NOT NULL
);

insert into produtos values(default, 'CJ1234','Calça Jeans Super Confortavel',10,90.00);
insert into produtos values(default, 'MO5214','Moletom Super Descolado',5,120.00);
