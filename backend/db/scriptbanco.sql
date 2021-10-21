create database bancoalimentos;
use bancoalimentos;
create table Produto(
idproduto int primary key auto_increment,
nomeproduto varchar(100) not null
);

create table estoque(
idestoque int primary key auto_increment,
idproduto int not null unique,
quantidade int not null
);


create table validade(
idvalidade int primary key auto_increment,
idproduto int not null,
quantidade int not null
);


create table doacao(
iddoacao int primary key auto_increment,
idproduto int not null,
iddoador int not null,
quantidade int not null,
datadoacao timestamp default current_timestamp
);

create table doador(
iddoador int primary key auto_increment,
bloco_apartamento varchar(100) not null default "Anonimo"
);

create table retirada(
idretirada int primary key auto_increment,
idproduto int not null,
quantidade int not null,
dataretirada timestamp default current_timestamp
);


ALTER TABLE `bancoalimentos`.`estoque` 
ADD CONSTRAINT `fk_estoque_pk_produto`
  FOREIGN KEY (`idproduto`)
  REFERENCES `bancoalimentos`.`produto` (`idproduto`);

ALTER TABLE `bancoalimentos`.`doacao` 
ADD CONSTRAINT `fk_doacao_pk_produto`
  FOREIGN KEY (`idproduto`)
  REFERENCES `bancoalimentos`.`produto` (`idproduto`),
ADD CONSTRAINT `fk_doacao_pk_doador`
  FOREIGN KEY (`iddoador`)
  REFERENCES `bancoalimentos`.`doador` (`iddoador`);
  
ALTER TABLE `bancoalimentos`.`retirada`
ADD CONSTRAINT `fk_retirada_pk_produto`
  FOREIGN KEY (`idproduto`)
  REFERENCES `bancoalimentos`.`produto` (`idproduto`);
