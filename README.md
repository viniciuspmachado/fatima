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
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome tinytext
);
```

### Criar tabela de Relacionamento entre Pessoa x Sacramento
```
CREATE TABLE pessoa_sacram (
	idPessoa INT NOT NULL,
    idSacram INT NOT NULL,
    
    CONSTRAINT PK_Pessoa_Sacram PRIMARY KEY (idPessoa, idSacram),
    CONSTRAINT PF_Pessoa_Sacram2 FOREIGN KEY (idPessoa)
		REFERENCES batismo (id),
	CONSTRAINT PF_Pessoa_Sacram3 FOREIGN KEY (idSacram)
		REFERENCES sacramentos (id)
);
```
### Criar tabela de Paróquias
```
CREATE TABLE paroquias (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome tinytext
);
```








