-- CreateTable
CREATE TABLE "ManagedService" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ManagedServerPackage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "setupFee" REAL NOT NULL,
    "monthlyFee" REAL NOT NULL,
    "notes" TEXT,
    "serviceId" INTEGER NOT NULL,
    CONSTRAINT "ManagedServerPackage_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ManagedService" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ManagedServerOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "priceMonthly" REAL,
    "priceOnce" REAL,
    "securityLevel" TEXT,
    "details" TEXT,
    "serviceId" INTEGER,
    CONSTRAINT "ManagedServerOption_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ManagedService" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ManagedService_key_key" ON "ManagedService"("key");
