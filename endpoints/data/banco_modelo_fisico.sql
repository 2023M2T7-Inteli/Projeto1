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
CREATE TABLE IF NOT EXISTS "Etapa" (
	"nome"	TEXT NOT NULL,
	"ID_Etapa"	INTEGER NOT NULL,
	"ID_Projeto"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Etapa" AUTOINCREMENT),
	FOREIGN KEY("ID_Projeto") REFERENCES "Projeto"("ID_Projeto")
);
CREATE TABLE IF NOT EXISTS "Pesquisador" (
	"nome"	TEXT NOT NULL,
	"login"	TEXT NOT NULL,
	"senha"	TEXT NOT NULL,
	"ID_Pesquisador"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Pesquisador" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Projeto" (
	"nome"	TEXT NOT NULL,
	"ativo"	TEXT NOT NULL,
	"ID_Projeto"	INTEGER NOT NULL,
	"ID_Produtor"	INTEGER NOT NULL,
	"ID_Pesquisador"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Projeto" AUTOINCREMENT),
	FOREIGN KEY("ID_Produtor") REFERENCES "Produtor"("ID_Produtor"),
	FOREIGN KEY("ID_Pesquisador") REFERENCES "Pesquisador"("ID_Pesquisador")
);
CREATE TABLE IF NOT EXISTS "Item" (
	"tipo_item"	TEXT NOT NULL,
	"valor"	TEXT NOT NULL,
	"status" CHAR(1) NOT NULL,
	"ID_Item"	INTEGER NOT NULL,
	"ID_Protocolo"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Item" AUTOINCREMENT),
	FOREIGN KEY("ID_Protocolo") REFERENCES "Protocolo"("ID_Protocolo"),
);
CREATE TABLE IF NOT EXISTS "Fotos" (
	"tipo_de_foto"	TEXT NOT NULL,
	"valor"	TEXT NOT NULL,
	"ID_Fotos"	INTEGER NOT NULL,
	"ID_Protocolo"	INTEGER,
	PRIMARY KEY("ID_Fotos" AUTOINCREMENT),
	FOREIGN KEY("ID_Protocolo") REFERENCES "Protocolo"("ID_Protocolo"),
);
INSERT INTO "Produtor" ("nome","login","senha","ID_Produtor") VALUES ('nome','1234','abc123',1),
 ('nome2','1234','abc123',2);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Produtor" ON "Produtor" (
	"ID_Produtor"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Produtor_0" ON "Produtor" (
	"ID_Produtor"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Pesquisador_0" ON "Pesquisador" (
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
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Fotos" ON "Fotos" (
	"ID_Fotos"
);
COMMIT;
