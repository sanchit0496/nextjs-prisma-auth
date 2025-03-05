/*
  Warnings:

  - Added the required column `userId` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Topic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "topic" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);
INSERT INTO "new_Topic" ("id", "topic") SELECT "id", "topic" FROM "Topic";
DROP TABLE "Topic";
ALTER TABLE "new_Topic" RENAME TO "Topic";
CREATE UNIQUE INDEX "Topic_topic_key" ON "Topic"("topic");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
