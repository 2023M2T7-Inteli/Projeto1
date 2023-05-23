BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Protocolo" (
	"nome"	TEXT NOT NULL,
	"ID_Protocolo"	INTEGER NOT NULL,
	"ID_Etapa"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Protocolo" AUTOINCREMENT),
	FOREIGN KEY("ID_Etapa") REFERENCES "Etapa"("ID_Etapa")
);
CREATE TABLE IF NOT EXISTS "Produtor" (
	"nome"	TEXT NOT NULL,
	"login"	TEXT NOT NULL,
	"senha"	TEXT NOT NULL,
	"ID_Produtor"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Produtor" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Pesquisador" (
	"nome"	TEXT NOT NULL,
	"codigo"	TEXT NOT NULL,
	"ID_Pesquisador"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Pesquisador" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Projeto" (
	"nome"	TEXT NOT NULL,
	"ativo"	TEXT NOT NULL,
	"ID_Projeto"	INTEGER NOT NULL,
	"ID_Produtor"	INTEGER NOT NULL,
	"ID_Pesquisador"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Projeto" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Alocacao" (
	"data_de_inicio"	INTEGER NOT NULL,
	"data_de_fim"	INTEGER NOT NULL,
	"ID_Alocacao"	INTEGER,
	"ID_Projeto"	INTEGER,
	"ID_Produtor"	INTEGER,
	"ID_Pesquisador"	INTEGER,
	PRIMARY KEY("ID_Alocacao"),
	FOREIGN KEY("ID_Pesquisador") REFERENCES "Pesquisador"("ID_Pesquisador"),
	FOREIGN KEY("ID_Projeto") REFERENCES "Projeto"("ID_Projeto"),
	FOREIGN KEY("ID_Produtor") REFERENCES "Produtor"("ID_Produtor")
);
CREATE TABLE IF NOT EXISTS "Etapa" (
	"nome"	TEXT NOT NULL,
	"status"	CHAR(1) NOT NULL,
	"ID_Etapa"	INTEGER NOT NULL,
	"ID_Projeto"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Etapa" AUTOINCREMENT),
	FOREIGN KEY("ID_Projeto") REFERENCES "Projeto"("ID_Projeto")
);
CREATE TABLE IF NOT EXISTS "Item" (
	"tipo_item"	TEXT NOT NULL,
	"valor"	TEXT NOT NULL,
	"status"	CHAR(1) NOT NULL,
	"ID_Item"	INTEGER NOT NULL,
	"ID_Protocolo"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Item" AUTOINCREMENT),
	FOREIGN KEY("ID_Protocolo") REFERENCES "Protocolo"("ID_Protocolo")
);
CREATE TABLE IF NOT EXISTS "Foto" (
	"tipo_de_foto"	TEXT NOT NULL,
	"valor"	BLOB NOT NULL,
	"ID_Fotos"	INTEGER NOT NULL,
	"ID_Protocolo"	INTEGER,
	PRIMARY KEY("ID_Fotos","ID_Protocolo"),
	FOREIGN KEY("ID_Fotos") REFERENCES "Foto"("ID_Fotos"),
	FOREIGN KEY("ID_Protocolo") REFERENCES "Protocolo"("ID_Protocolo")
);
CREATE TABLE IF NOT EXISTS "Usuario" (
	"login"	TEXT NOT NULL,
	"senha"	TEXT NOT NULL,
	"tipo"	TEXT NOT NULL,
	"ID_Usuario"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Usuario" AUTOINCREMENT)
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Produtor" ON "Produtor" (
	"ID_Produtor"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Pesquisador" ON "Pesquisador" (
	"ID_Pesquisador"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Projeto" ON "Projeto" (
	"ID_Projeto"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Etapa" ON "Etapa" (
	"ID_Etapa"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Item" ON "Item" (
	"ID_Item"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Fotos" ON "Foto" (
	"ID_Fotos"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Usuario" ON "Usuario" (
	"ID_Usuario"
);
COMMIT;
