drop database if exists Patrimonio;
create database Patrimonio charset=UTF8 collate utf8_general_ci;
use Patrimonio;

--DDL
create table itens(
    ni numeric(6) not null,
    aquisicao timestamp not null,
    denominacao varchar(100) not null,
    valor numeric(10,2) not null,
    img varchar(250) default 'assets/default.png',
    constraint pk_item primary key (ni)
);


describe itens;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/2des/pwbe - back/aula12/docs/bd/itens.csv'
INTO TABLE itens
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from itens;