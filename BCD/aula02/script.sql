-- Exclui o banco se existir e cria um novo com o padrao utf8 de caracteres
drop database if exists pedidos;
create database pedidos charset=UTF8 collate utf8_general_ci;
use pedidos;
-- DDL Criação da estrutura do Banco de dados
create table clientes(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    endereco varchar(100) not null

);

create table telefone(
     id_cliente integer,
     telefone varchar(15) not null,
     foreign key (id_cliente) references clientes(id_cliente)
);

create table pedidos(
    num_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data timestamp not null,
    valor decimal(8,2) not null,
    descricao varchar(50) not null,
    quantidade integer(4),
    foreign key (id_cliente) references clientes(id_cliente)
);

show tables;
describe clientes;
describe telefones;
describe pedidos;

-- Diferença entre o diagrama conceitual e o lógico :
--o conceitual é mais proximo da solucao do problema e do cliente, enquanto o logico é da ferramenta(do codigo).
-- DML Alimentar o bando de dados com dados de teste 

insert into clientes values 
(null, "Jorge", "Silva","Rua Coisa Bueno - Jaguariúna - SP" ),
(null, "Vanessa", "Silva","Rua Amâncio Bueno - Jaguariúna - SP" ),
(null, "Marcelo", "Souza","Rua Dois - Pedreira - SP" ),
(null, "Juliana", "Tavares","Rua Bueno Bueno - Jaguariúna - SP" );

insert into telefones values 
(1,"19 95173-0531"),
(1,"19 94176-2089"),
(2,"19 93317-5584"),
(2,"19 91017-9567"),
(3,"19 96221-3681");

insert into pedidos values
(null, 1,null,10,"Pastel de flango",2);
(null, 1,null,8,"Pastel de carne",3);
(null, 2,null,15,"Pastel de calabresa",1);
(null, 3,null,10,"Pastel de queijo",4);
(null, 3,null,12,"Pastel de banana",5);
(null, 4,null,6,"Pastel de bacon",10);
(null, 4,null,10,"Pastel de catupiry",2);
(null, 4,null,8,"Pastel de carne e queijo",3);
(null, 4,null,15,"Pastel de 4 queijos",1);
(null, 5,null,10,"Pastel de camarão",4);
(null, 5,null,12,"Pastel de laranja",7);
(null, 5,null,6,"Pastel de bacon e queijo",11);



select * from telefones;
select * from clientes;