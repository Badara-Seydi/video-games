-- Deploy jeuxvideo:initialization to pg

BEGIN;

CREATE TABLE "jeuxvideo" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "image" INT NOT NULL,
    "description" TEXT NOT NULL,
    "date_de_sortie" TEXT NOT NULL,
    "plateforme" TEXT NOT NULL ,
    "note" INTEGER NOT NULL 
);

CREATE TABLE "plateforme" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "libellé" TEXT NOT NULL
);

CREATE TABLE "genre" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "libellé" TEXT NOT NULL
);

CREATE TABLE "jeuxvideo_has_plateforme"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "jeuxvideo_id" INTEGER REFERENCES "jeuxvideo"("id"),
    "plateforme_id" INTEGER REFERENCES "plateforme"("id"),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE ("jeuxvideo_id")

);

COMMIT;

