## Banco de Dados
Criar banco de dados fatimaDB

### Criar tabela batismo
```
CREATE TABLE batismo (
	id int NOT NULL AUTO_INCREMENT,
    dt_cadasto datetime default(CURRENT_DATE),
    t_paticipacao boolean, #Padrinhos (0), Pais (1)
    nome_ele text(500),
    nome_ela text(500),
    casados boolean, #Casados (1), Não (0)
    dt_participacao date,
    endereco text(1000),
    cidade tinytext,
    telefone text(20),
    paroquia smallint,
    ecc boolean, #Sim(1), Não (0)
	PRIMARY KEY (id)
);
```
### Criar tabela Sacramentos
```
CREATE TABLE sacramentos (
	id int NOT NULL AUTO_INCREMENT,
    nome tinytext
);
```


1- Fatima 
2- São João
3- Santa Teresinha
4- São Cristóvão
5- Nossa Senhora dos Mártires
6- Rosário
7- São Francisco
8- Cristo Libertador
9- Laura Vicuña
10- São José Operário
11- Lourdes
12- Cristo Rei
13- São José
14- Amparo
15- Mater Dolorosa
16- Santa João D’arc 
17- Cabral
18- Santíssima Trindade 
19- Candeias
20- São Paulo
21- São Benedito
22- Morada Nova (Nossa Senhora da Imaculada Conceição)
23- Lourdes
24- Menino Jesus de Praga
25- Noivos
26- Santo Antônio
27- Nazaré
28- Paulo VI
29- Shalom




