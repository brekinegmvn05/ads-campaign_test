-- CreateTable
CREATE TABLE "AdvertiserProfile" (
    "id_no" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,

    CONSTRAINT "AdvertiserProfile_pkey" PRIMARY KEY ("id_no")
);

-- CreateTable
CREATE TABLE "Ad" (
    "id" SERIAL NOT NULL,
    "campaign_name" TEXT NOT NULL,
    "advertiser_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "audience" TEXT NOT NULL,
    "target_audience" TEXT NOT NULL,
    "specific_keywords" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "schedule" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "deliver" TEXT NOT NULL,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_advertiser_id_fkey" FOREIGN KEY ("advertiser_id") REFERENCES "AdvertiserProfile"("id_no") ON DELETE RESTRICT ON UPDATE CASCADE;
