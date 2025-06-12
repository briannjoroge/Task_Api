-- CreateTable
CREATE TABLE "TaskApi" (
    "id" SERIAL NOT NULL,
    "Task_Title" TEXT NOT NULL,
    "Task_Description" TEXT NOT NULL,
    "Is_Completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TaskApi_pkey" PRIMARY KEY ("id")
);
