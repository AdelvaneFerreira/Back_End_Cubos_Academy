/* Seleciona todas as músicas*/
SELECT * FROM musicas

/*Selecione apenas os compositores e o identificador*/
SELECT id, compositor FROM musicas

/*Selecione as composições e o tempo de cada composição onde o tempo seja maior que 4 minutos*/
SELECT composicao, tempo  FROM musicas WHERE tempo > 4*60

/*Selecione os compositores e suas composições que tenham identificadores entre 47 e 123*/
SELECT * FROM musicas WHERE id  BETWEEN 47 AND 123

/* Selecione todos os registros com todos os campos da tabela `musicas`, onde o compositor não seja nulo,
o tempo seja menor que 5 minutos e o nome do compositor seja diferente de `Bach`*/
SELECT * FROM musicas WHERE compositor IS NOT NULL AND tempo < 300 AND compositor <> 'Bach'

/*Selecione as composições e o tempo de cada composição, de todos os registros da tabela `musicas`,
onde o compositor seja `Mozart` ou `Bach`.*/
SELECT composicao, tempo  FROM musicas WHERE compositor = 'Mozart' OR compositor = 'Bach'


 /*Selecione todos os registros com todos os campos da tabela `musicas` e faça uma ordenação pelo 
 identificador em ordem decrescente.*/
 SELECT * FROM musicas ORDER BY id DESC
 
 /*Selecione todos os registros com todos os campos da tabela `musicas` e faça uma ordenação pelo 
 tempo de execução de cada música, da que leva mais tempo a ser executada para a que leva menos tempo.*/
 SELECT * FROM musicas ORDER BY tempo DESC 
 
 /*Selecione as 5 composições, com todos os campos da tabela `musicas`, nas quais sejam as 5
 composições mais rápida em tempo de execução.*/
  SELECT * FROM musicas WHERE tempo < 80 LIMIT 5 
  
 /*Selecione as 10 composições, com todos os campos da tabela `musicas`, nas quais sejam as
 10 composições que mais demora em tempo de execução.*/
 SELECT * FROM musicas WHERE tempo >900 LIMIT 10 
 
  /*Selecione 10 registros, com todos os campos da tabela `musicas`, de forma que esses 10
  registros sejam os que tenham menor tempo de execução com exceção dos 5 primeiro mais rápidos.*/
   SELECT * FROM musicas WHERE tempo < 200 LIMIT 10
   
   /*Seguindo o conceito de paginação de resultados, sabendo que cada página retorna apenas 10
   resultados, faça a listagem dos registros que correspondam a página 4.*/
   
   /*Seguindo o conceito de paginação de resultados, sabendo que cada página retorna apenas 12
   resultados, faça a listagem dos registros que correspondam a página 6.*/
   
   /*Selecione todos os compositores da tabela `musicas` de forma que os resultados não sejam 
   repetidos e não esteja nulo.*/
    SELECT distinct  compositor  FROM musicas WHERE compositor IS NOT NULL
 
 /*Selecione os compositores e as composições da tabela `musicas` de forma que os resultados não
 sejam repetidos.*/
 SELECT distinct  composicao, compositor  FROM musicas 
 
 /*Selecione todos os campos da tabela `musicas` e os registros que o nome do compositor comece
 exatamente com `Bra`, isso significa que se a primeira letra não form maiúscula está incorreto.*/
 SELECT * FROM musicas WHERE compositor LIKE 'Bra%'
 
/*Selecione todos os campos da tabela `musicas` e os registros que o ritmo possua a última 
palavra igual a `troppo` independente do restante do texto que antecede, mas que seja exatamente
a última palavra do texto.*/
 SELECT * FROM musicas WHERE ritmo LIKE '%troppo'
 
 /*Faça uma busca nos registros da tabela `musicas`e retorne somente os registros que possua em
 qualquer posição do texto, da composição, a palavra `quartet`, independente de ser maiúscula ou minúscula.*/
 SELECT * FROM musicas WHERE composicao ILIKE '%quartet%'
 
 /*Faça uma busca nos registros da tabela `musicas` e retorne somente os registros que não possua a palavra
 `quintet` na coluna composição, independente de ser maiúscula ou minúscula.*/
