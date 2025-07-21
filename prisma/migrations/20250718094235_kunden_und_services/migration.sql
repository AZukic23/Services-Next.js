-- CreateTable
CREATE TABLE "Kunde" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "KundeService" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "kundeId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    CONSTRAINT "KundeService_kundeId_fkey" FOREIGN KEY ("kundeId") REFERENCES "Kunde" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "KundeService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
