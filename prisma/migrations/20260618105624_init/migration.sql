-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "kannadaTitle" TEXT NOT NULL,
    "englishTitle" TEXT NOT NULL,
    "kannadaContent" TEXT NOT NULL,
    "englishContent" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
