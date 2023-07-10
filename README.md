{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
}

### Banco de Dados
Criar banco de dados fatimaDB

## Criar tabela batismo
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

1- Fatima 
2- São João
3- Santa Teresinha
4- São Cristóvão
5- Nossa Senhora dos Mártires
6- Rosário
