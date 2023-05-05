BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Produtor" (
	"nome"	TEXT,
	"login"	TEXT,
	"senha"	TEXT,
	"ID_Produtor"	INTEGER NOT NULL,
	CONSTRAINT "pk_Produtor" UNIQUE("ID_Produtor")
);
CREATE TABLE IF NOT EXISTS "Pesquisador" (
	"nome"	TEXT,
	"login"	TEXT,
	"senha"	TEXT,
	"ID_Pesquisador"	INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS "Projeto" (
	"nome"	TEXT,
	"ativo"	TEXT,
	"ID_Projeto"	INTEGER NOT NULL,
	"ID_Produtor"	INTEGER NOT NULL,
	"ID_Pesquisador"	INTEGER NOT NULL,
	FOREIGN KEY("ID_Produtor") REFERENCES "Produtor"("ID_Produtor"),
	FOREIGN KEY("ID_Pesquisador") REFERENCES "Pesquisador"("ID_Pesquisador")
);
CREATE TABLE IF NOT EXISTS "Etapa" (
	"nome"	TEXT NOT NULL,
	"ID_Etapa"	INTEGER NOT NULL,
	"ID_Projeto"	INTEGER NOT NULL,
	CONSTRAINT "pk_Etapa" UNIQUE("ID_Etapa"),
	FOREIGN KEY("ID_Projeto") REFERENCES "Projeto"("ID_Projeto")
);
CREATE TABLE IF NOT EXISTS "Protocolo" (
	"nome"	TEXT NOT NULL,
	"ID_Protocolo"	INTEGER NOT NULL,
	"ID_Etapa"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Protocolo"),
	FOREIGN KEY("ID_Etapa") REFERENCES "Etapa"("ID_Etapa")
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Produtor" ON "Produtor" (
	"ID_Produtor"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Produtor_0" ON "Produtor" (
	"ID_Produtor"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Pesquisador_0" ON "Pesquisador" (
	"ID_Pesquisador"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Etapa" ON "Etapa" (
	"ID_Etapa"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_Projeto" ON "Projeto" (
	"ID_Projeto"
);
COMMIT;
