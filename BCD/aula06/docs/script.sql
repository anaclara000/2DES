drop database if exists desafio;
create database desafio charset=UTF8 collate utf8_general_ci;
use desafio;

create table clientes(
    cpf varchar(11) not null,
    nome varchar(150) not null,
    sobrenome varchar(150) not null,
    cep varchar(10) not null,
    complemento varchar(150)
);

describe clientes;

create table emprestimos(
    id integer not null primary key auto_increment,
    cpf_empres varchar(11) not null,
    data_emprestimos varchar(15) not null,
    capital float(8,2) not null,
    n_parcelas varchar(15) not null,
    taxa_juros varchar(15) not null,
    impostos varchar(15) not null

);
describe emprestimos;


create table telefones(
    cpf_tel varchar(11) not null,
    tipo varchar(8),
    numero varchar(15)
);
describe telefones;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/2des/Banco de dados/aula06/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/2des/Banco de dados/aula06/docs/emprestimos.csv'
INTO TABLE emprestimos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/2des/Banco de dados/aula06/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;