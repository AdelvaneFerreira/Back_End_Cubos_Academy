/*Criar a tabela*/
CREATE TABLE users (
  id SERIAL NOT NULL ,
  nome VARCHAR(80) NOT NULL,
  idade INT NOT NULL,
  email VARCHAR(80) NOT NULL,
  senha VARCHAR(8) NOT NULL,
  PRIMARY KEY (id)
);
/*Atualizar o nome do cliente*/
UPDATE users SET nome = 'Raja W. Coffey Thomas' WHERE id = 4

/* Inserir dados na tabela*/
INSERT  INTO users 
(nome, idade, email, senha) 
VALUES ('Aretha Montgomery', 30, 'augue.id.ante@odioAliquam.com' ,'a0B13O3L' ), 
('Camden H. Bartlett', 15, 'turpis.vitae.purus@risusDuisa.ca' , 'p3P96F3Q'),
('Raja W. Coffey   ', 30, 'raja.feugiat@nonummy.com ' , 's5F51T7L'),
(' Elton D. Olsen     ',29, 'auctor@duiFuscediam.edu ' , 'k5X25B0R'),
('Shelley E. Frederick ', 20, 'raja.feugiat@nonummy.com ' , 'u2D18F6E')

/*Apagar dados iguais*/
MONITORIA

/* Inserir dados na tabela*/
INSERT  INTO users 
(nome, idade, email, senha) 
VALUES (' Jermaine G. Sellers', 16, 'ligula.Nullam@tortordictum.co.uk' ,'o2P56U9U'), 
('James D. Kennedy', 23, 'amet@Nulladignissim.com', 'q6B78V3V'),
('Amelia S. Harris',  29, 'nec.metus.facilisis@vitaealiquet.edu', 'l4S64Y3A'),
('Joel M. Hartman', 18, 'montes.nascetur@odiotristique.co.uk', 'c4Q27D7O'),
('Elmo K. Greer', 18, 'risus.Duis@eget.ca', 'e3P92I7R')


/*Inserindo uma nova coluna*/
ALTER TABLE users
ADD COLUMN Situacao BOOLEAN

/*Sendo assim, você precisa atualizar o registro que possui o e-mail
`montes.nascetur@odiotristique.co.uk` alterando a situação dele para falso*/MONITORIA//

/*Atualizar o EMAIL do cliente*/
UPDATE users SET email = 'Raja W. Coffey Thomas' WHERE situacao = 't'//MONITORIA

/*Alteração da sua senha*/
UPDATE users SET senha = 'k9P31H1O' WHERE email = 'risus.Duis@eget.ca'

/*Será necessário excluir o campo `idade` e adicionar um novo campo chamado `data_nascimento`*/
ALTER TABLE users DROP COLUMN idade;

ALTER TABLE users
ADD COLUMN data_nascimento date

/*Atualizando data de nascimento*/
UPDATE users SET data_nascimento = '1991-09-29' WHERE email  = 'auctor@duiFuscediam.edu';
UPDATE users SET data_nascimento = '1988-11-28' WHERE email  = 'nec.metus.facilisis@vitaealiquet.edu';
UPDATE users SET data_nascimento = '1991-09-09' WHERE email  = 'augue.id.ante@odioAliquam.com';
UPDATE users SET data_nascimento = '1988-11-22' WHERE email  = 'turpis.vitae.purus@risusDuisa.ca';
UPDATE users SET data_nascimento = '1991-09-19' WHERE email  = 'raja.feugiat@nonummy.com ';
UPDATE users SET data_nascimento = '1988-11-13' WHERE email  = 'ligula.Nullam@tortordictum.co.uk';
UPDATE users SET data_nascimento = '1991-09-19' WHERE email  = 'amet@Nulladignissim.com';
UPDATE users SET data_nascimento = '1988-11-02' WHERE email  = 'montes.nascetur@odiotristique.co.uk';
UPDATE users SET data_nascimento = '1988-11-12' WHERE email  = 'risus.Duis@eget.ca';
UPDATE users SET data_nascimento = '1988-11-12' WHERE email  = 'auctor@duiFuscediam.edu ';

/*Excluir definitivamente todos os registros que estão sem a data de nascimento.*/
ALTER TABLE users DROP COLUMN data_nascimento;

/*Restrição ao campo `data_nascimento` para que fosse um campo obrigatório.*/
ALTER TABLE users
ALTER COLUMN data_nascimento SET NOT NULL

/*Cadastre os registros*/
INSERT  INTO users 
(nome, data_nascimento, email, senha) 
VALUES ('Tate I. Dean','1989-05-01', 'Nunc@etmagnis.edu', 'd3V25D6Y'),
('Arsenio K. Harmon', '1985-10-23', 'adipiscing.elit@turpis.com', 'm3T58S0C')