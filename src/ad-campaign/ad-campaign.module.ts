// app.module.ts
import { Module } from '@nestjs/common';

import { AdService } from './ad-campaign.service';
import { AdController } from './ad-campaign.controller';
import { PrismaService } from 'prisma.service';

@Module({
  controllers: [AdController],
  providers: [AdService, PrismaService],
})
export class AdModule {}
