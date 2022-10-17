CREATE  DATABASE dindin;

CREATE TABLE  usuarios (
    id serial primary key,
    nome  varchar(255) not null,
    email varchar(255) not null unique,
    senha varchar(255) not null
);

CREATE TABLE categorias (
    id serial primary key,
    descricao varchar(255) not null
);

CREATE TABLE transacoes (
    id serial primary key,
    descricao varchar(255) not null,
    valor  varchar(255) not null,
    data  date not null,
    categoria_id integer not null,
    usuario_id integer not null,
    tipo varchar(255) not null,
    CONSTRAINT fk_transacoes_usuarios
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_transacoes_categorias
        FOREIGN KEY (categoria_id)
        REFERENCES categorias (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);  

INSERT INTO categorias (descricao) VALUES ('Alimentação');
INSERT INTO categorias (descricao) VALUES ( 'Assinaturas e Serviços');
INSERT INTO categorias (descricao) VALUES ( 'Casa');
INSERT INTO categorias (descricao) VALUES ( 'Mercado');
INSERT INTO categorias (descricao) VALUES ( 'Cuidados Pessoais');
INSERT INTO categorias (descricao) VALUES ( 'Educação');
INSERT INTO categorias (descricao) VALUES ( 'Família');
INSERT INTO categorias (descricao) VALUES ( 'Lazer');
INSERT INTO categorias (descricao) VALUES ( 'Pets');
INSERT INTO categorias (descricao) VALUES ( 'Presentes');
INSERT INTO categorias (descricao) VALUES ( 'Roupas');
INSERT INTO categorias (descricao) VALUES ( 'Saúde');
INSERT INTO categorias (descricao) VALUES ( 'Transporte');
INSERT INTO categorias (descricao) VALUES ( 'Salário');
INSERT INTO categorias (descricao) VALUES ( 'Vendas');
INSERT INTO categorias (descricao) VALUES ( 'Outras receitas');
INSERT INTO categorias (descricao) VALUES ( 'Outras despesas');