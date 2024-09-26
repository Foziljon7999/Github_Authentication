-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_platform_id" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
