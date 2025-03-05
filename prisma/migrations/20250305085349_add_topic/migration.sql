/*
  Warnings:

  - You are about to drop the column `userid` on the `Topic` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Topic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "topic" TEXT NOT NULL
);
INSERT INTO "new_Topic" ("id", "topic") SELECT "id", "topic" FROM "Topic";
DROP TABLE "Topic";
ALTER TABLE "new_Topic" RENAME TO "Topic";
CREATE UNIQUE INDEX "Topic_topic_key" ON "Topic"("topic");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
