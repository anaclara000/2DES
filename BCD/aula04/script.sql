
-- EXERCICIO 01

CREATE database IF NOT EXISTS CLIENTES;
use CLIENTES;

create table cliente (
    id_cliente integer not null PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE NOT NULL,
    sexo CHAR NOT NULL,
    peso float(5, 2) 
);
CREATE table telefones (
    id_cliente integer not null,
    telefone varchar(15) not null,

    foreign key (id_cliente) references cliente(id_cliente)
);

-- ENVIANDO PARA O BANCO DE DADOS
insert into cliente values(null,"Ana de Souza de Oliveira","2000-05-22","M",65.5);						
insert into cliente values(null,"Ana Oliveira Oliveira","1990-08-23","T",88);						
insert into cliente values(null,"Lúcia da Silva de Souza","1988-06-14","F",45.5);						
insert into cliente values(null,"Marcos de Souza Castro","2002-07-13","M",98);						
insert into cliente values(null,"Maria Oliveira Castro","2005-08-14","T",101);						
insert into cliente values(null,"Jurema de Souza Castro","2007-06-15","F",80);		
select * from cliente;				

insert into telefones values("1","(11)04023-4384");
insert into telefones values("1","(14)3288-8530");
insert into telefones values("2","(21)74746-1126");
insert into telefones values("2","(14)64505-3435");
insert into telefones values("2","(19)03086-1102");
insert into telefones values("3","(14)64500-3435");
insert into telefones values("4","(19)28260-0126");
insert into telefones values("5","(21)34757-1544");
insert into telefones values("6","(19)3030-4465");
insert into telefones values("6","(19)93030-4460");
select * from telefones;


-- EXERCICIO 02

CREATE database IF NOT EXISTS ACADEMIA;
use ACADEMIA;

create table cliente(
    id_cliente integer not null PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE NOT NULL,
    sexo CHAR NOT NULL,
    peso float(5, 2)
);


-- ENVIANDO PARA O BANCO DE DADOS

insert into cliente values(null,"Marcos de Souza Castro","2000-05-22","M",65.0);
insert into cliente values(null,"Ana Oliveira Oliveira","1990-08-23","T",88.0);
insert into cliente values(null,"Lúcia da Silva de Souza","1988-06-14","F",45.5);
insert into cliente values(null,"Ana de Souza de Oliveira","2002-07-13","M",98.0);

select * from cliente;	

create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,

    foreign key (id_cliente) references cliente(id_cliente)
);

create table aparelhos(
    id_aparelho integer not null PRIMARY KEY AUTO_INCREMENT,
    aparelho VARCHAR(30) NOT NULL

);

create table exercicios(
    id_exercicio integer not null PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(30) NOT NULL,
    grupo_muscular VARCHAR(20) NOT NULL,
    id_aparelho integer not null,

    foreign key (id_aparelho) references aparelhos(id_aparelho)
);

create table ficha_exercicios(
    id_cliente integer not null,
    id_exercicio integer not null,
    dia_semana VARCHAR(10) NOT NULL,
    serie VARCHAR(30) NOT NULL,

    foreign key (id_cliente) references cliente(id_cliente),
    foreign key (id_exercicio) references exercicios(id_exercicio)

);


-- EXERCICIO 03

CREATE database IF NOT EXISTS TRANSPORTE;
use TRANSPORTE;

create table motoristas(
    id_motorista integer not null PRIMARY KEY AUTO_INCREMENT,
    CPF VARCHAR(11) NOT NULL,
    nome VARCHAR(30) NOT NULL
);

create table telefones(
    id_motorista integer not null,
    telefone varchar(15) not null,

    foreign key (id_motorista) references motoristas(id_motorista)
);

create table linhas(
    id_linha VARCHAR(10) NOT NULL,
    descricao_linha VARCHAR(20) NOT NULL

);

create table horarios_linha(
    id_linha VARCHAR(10) NOT NULL,
    horarios VARCHAR(6) NOT NULL

);

create table mot_linha(
    id_motorista integer not null,
    id_linha VARCHAR(10) NOT NULL,
    data_dia DATE NOT NULL,

    foreign key (id_motorista) references motoristas(id_motorista)
);

-- EXERCICIO 04

CREATE database IF NOT EXISTS PAGAMENTO;
use PAGAMENTO;

create table clientes(
    id_cliente integer not null PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    endereco VARCHAR(30) NOT NULL,
    bairro VARCHAR(15) NOT NULL,
    cidade VARCHAR(15) NOT NULL,
    estado VARCHAR(2) NOT NULL
);

create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    celular VARCHAR(15) not null,

    foreign key (id_cliente) references clientes(id_cliente)
);

create table pagamentos(
    id_cliente integer not null,
    parcelas DOUBLE(3,0) NOT NULL,
    data_compra DATE NOT NULL,
    vencimento DATE NOT NULL,
    pagamentos DATE NOT NULL,
    valor DOUBLE(10,2) NOT NULL,
    diferenca DOUBLE(10,2) NOT NULL,
    valor_final  DOUBLE(10,2) NOT NULL,
    status_pag VARCHAR(15) NOT NULL,

    foreign key (id_cliente) references clientes(id_cliente)
);

-- EXERCICIO 05

CREATE database IF NOT EXISTS LOJA;
use LOJA;

create table clientes(
    id_cliente integer not null PRIMARY KEY AUTO_INCREMENT,
    CPF VARCHAR(11) NOT NULL,
    nome VARCHAR(30) NOT NULL,
    CEP VARCHAR(10) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    completo VARCHAR(10) NOT NULL

);

create table telefones(
    id_cliente integer not null,
    telefones VARCHAR(15) NOT NULL,

    foreign key (id_cliente) references clientes(id_cliente)
);

create table entregador(
    id_entregador integer not null PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    veiculo VARCHAR (10) NOT NULL

);

create table produtos (
    id_produto integer not null PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(20) NOT NULL,
    preco DOUBLE (5,2)

);

create table pedido(
    id_cliente integer not null,
    id_pedido integer not null PRIMARY KEY AUTO_INCREMENT,
    id_entregador integer not null,
    data_pedido VARCHAR(8) NOT NULL,
    hora_pedido time,
    hora_entrega time,
    hora_final time,
    quantidade VARCHAR(3) NOT NULL, 
    id_produto integer not null,
    sub_total DOUBLE (5,2),

    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_entregador) references entregador(id_entregador),
    foreign key (id_produto) references produtos(id_produto)
);