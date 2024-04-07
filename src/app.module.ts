import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AdService } from './ad-campaign/ad-campaign.service';

import { PrismaService } from '../prisma.service';
import { AdController } from './ad-campaign/ad-campaign.controller';
import { AdModule } from './ad-campaign/ad-campaign.module';
import { AppService } from './app.service';

@Module({
  imports: [AdModule],
  controllers: [AppController, AdController],
  providers: [AppService, AdService, PrismaService],
})
export class AppModule {}
