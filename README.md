## Banco de Dados
Criar banco de dados fatimaDB

### Criar tabela batismo
```
CREATE TABLE batismo (
	id int NOT NULL AUTO_INCREMENT,
    dt_cadastro datetime default(CURRENT_DATE),
    t_participacao boolean, #Padrinhos (0), Pais (1)
    nome_ele text(500),
    nome_ela text(500),
    casados boolean, #Casados (1), Não (0)
    dt_participacao char(10),
    endereco text(1000),
    cidade tinytext,
    telefone text(20),
    paroquia smallint,
    ecc boolean, #Sim(1), Não (0)
	PRIMARY KEY (id)
);
```

### Criar tableas Datas Batismo
```
CREATE TABLE datas_bat (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data CHAR(10) NOT NULL
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
### Criar tabela de login
```
CREATE TABLE fatima.login (
  id INT NOT NULL AUTO_INCREMENT,
  login VARCHAR(45) NOT NULL,
  senha TEXT(1000) NOT NULL,
  aprov BOOLEAN NULL DEFAULT 0,
  perm INT NOT NULL,
  nome TEXT(200) NOT NULL,
  email VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
  );
```
### Criar tabela de permissões por pastorais
```
CREATE TABLE fatima.perm (
    id int,
    pastoral varchar(25)
);
```

### Ajeitar Usuário
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'F3r5a5d0'
```

### Comando para o build

Linux e macOS (Windows Git Bash )-
```
export NODE_OPTIONS=--openssl-legacy-provider
```
Prompt de comando do Windows-
```
set NODE_OPTIONS=--openssl-legacy-provider
```
Windows PowerShell-
```
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```


### Cria tabela de casais ECC
```
CREATE TABLE `ecc_casais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_ele` text NOT NULL,
  `nome_ela` text NOT NULL,
  `arquidiocese` int NOT NULL,
  `cidade_ecc` int NOT NULL,
  `paroquia_ecc` int NOT NULL,
  `dt_cadastro` datetime NOT NULL,
  `ecc_no` int NOT NULL,
  `usual_ele` text,
  `usual_ela` text,
  `dt_nasc_ele` char(10) DEFAULT NULL,
  `dt_nasc_ela` char(10) DEFAULT NULL,
  `endereco` text,
  `cidade` int DEFAULT NULL,
  `estado` int DEFAULT NULL,
  `telefone_ele` tinytext,
  `telefone_ela` tinytext,
  `religiao_ele` int DEFAULT NULL,
  `religiao_ela` int DEFAULT NULL,
  `casados_civil` tinyint(1) DEFAULT NULL,
  `batizado_ele` tinyint(1) DEFAULT NULL,
  `comunhao_ele` tinyint(1) DEFAULT NULL,
  `batizado_ela` varchar(45) DEFAULT NULL,
  `comunhao_ela` tinyint(1) DEFAULT NULL,
  `crismado_ele` tinyint(1) DEFAULT NULL,
  `criamado_ela` tinyint(1) DEFAULT NULL,
  `instrucao_ele` int DEFAULT NULL,
  `instrucao_ela` int DEFAULT NULL,
  `casamento_rel` int DEFAULT NULL,
  `paroquia_casamento` int DEFAULT NULL,
  `dt_casamento` char(10) DEFAULT NULL,
  `paroquia_frequenta` int DEFAULT NULL,
  `atuantes` tinyint(1) DEFAULT NULL,
  `movimentos` tinyint(1) DEFAULT NULL,
  `movimento_quais` text,
  `outra_rel` tinyint(1) DEFAULT NULL,
  `outra_rel_quais` text,
  `entidades` int DEFAULT NULL,
  `profissao_ele` text,
  `profissao_ela` text,
  `end_trab_ele` text,
  `end_trab_ela` text,
  `cargo_ele` text,
  `cargo_ela` text,
  `conducao` int DEFAULT NULL,
  `netos` tinyint(1) DEFAULT NULL,
  `fica_filhos_nome` text,
  `fica_filhos_end` text,
  `fica_filhos_parentesco` text,
  `fica_filhos_fone` tinytext,
  `nome_pais_ele` text,
  `nome_pais_ela` text,
  `end_pais_ele` text,
  `end_pais_ela` text,
  `fone_pais_ele` tinytext,
  `fone_pais_ela` tinytext,
  `cidade_pais_ele` tinytext,
  `cidade_pais_ela` tinytext,
  `casal_convite` text,
  `ecc_casal_convite` int DEFAULT NULL,
  `paroquia_casal_convite` int DEFAULT NULL,
  `end_casal_convite` text,
  `fone_casal_convite` tinytext,
  `parente_convite` tinyint(1) DEFAULT NULL,
  `grau_parente_convite` text,
  `nomes_end_chegados` longtext,
  `foto` text,
  `email_ele` text,
  `email_ela` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de cadastro de filhos
```
CREATE TABLE `ecc_filhos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de relacionamento de filhos e casal
```
CREATE TABLE `casal_filhos` (
  `idCasal` int NOT NULL,
  `idFilho` int NOT NULL,
  PRIMARY KEY (`idCasal`,`idFilho`),
  KEY `PF_Casal_Filho3` (`idFilho`),
  CONSTRAINT `PF_Casal_Filho2` FOREIGN KEY (`idCasal`) REFERENCES `ecc_casais` (`id`),
  CONSTRAINT `PF_Casal_Filho3` FOREIGN KEY (`idFilho`) REFERENCES `ecc_filhos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de cidades
```
CREATE TABLE `cidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `id_estado` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de estado
```
CREATE TABLE `estado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de religião
```
CREATE TABLE `religiao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de instrução
```
CREATE TABLE `instrucao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de entidades
```
CREATE TABLE `entidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de entidades
```
CREATE TABLE `ecc_habilidades` (
  `id` int NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```


### Criar tabela de relacionamento de habilidades e casal
```
CREATE TABLE `casal_habilidades` (
  `idCasal` int NOT NULL,
  `idHabilidade` int NOT NULL,
  PRIMARY KEY (`idCasal`,`idHabilidade`),
  KEY `PF_Hab_Filho3` (`idHabilidade`),
  CONSTRAINT `PF_Hab_Filho2` FOREIGN KEY (`idCasal`) REFERENCES `ecc_casais` (`id`),
  CONSTRAINT `PF_Hab_Filho3` FOREIGN KEY (`idHabilidade`) REFERENCES `ecc_habilidades` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de equipes
```
CREATE TABLE `ecc_equipes` (
  `id` int NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de relacionamento de equipes que já participou e casal
```
CREATE TABLE `casal_equipes` (
  `idCasal` int NOT NULL,
  `idEquipe` int NOT NULL,
  PRIMARY KEY (`idCasal`,`idEquipe`),
  KEY `PF_Equi_Filho3` (`idEquipe`),
  CONSTRAINT `PF_Equi_Filho2` FOREIGN KEY (`idCasal`) REFERENCES `ecc_casais` (`id`),
  CONSTRAINT `PF_Equi_Filho3` FOREIGN KEY (`idEquipe`) REFERENCES `ecc_equipes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de relacionamento de equipes que já coordenou e casal
```
CREATE TABLE `casal_equipes_coord` (
  `idCasal` int NOT NULL,
  `idEquipe` int NOT NULL,
  PRIMARY KEY (`idCasal`,`idEquipe`),
  KEY `PF_Equi_Coord3` (`idEquipe`),
  CONSTRAINT `PF_Equi_Coord2` FOREIGN KEY (`idCasal`) REFERENCES `ecc_casais` (`id`),
  CONSTRAINT `PF_Equi_Coord3` FOREIGN KEY (`idEquipe`) REFERENCES `ecc_equipes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### Criar tabela de circulos
```
CREATE TABLE `ecc_circulos` (
  `id` INT NOT NULL,
  `cor` VARCHAR(45) NULL,
  `nome` VARCHAR(45) NULL,
  `ecc_no` INT NULL,
  PRIMARY KEY (`id`));
```

### Criar tabela de relacionamento de circulos
```
CREATE TABLE `fatima`.`ecc` (
  `no` INT NOT NULL,
  `ano` INT NULL,
  `tema` VARCHAR(45) NULL,
  `lema` VARCHAR(45) NULL,
  `casal_coord` INT NULL,
  PRIMARY KEY (`no`));
```