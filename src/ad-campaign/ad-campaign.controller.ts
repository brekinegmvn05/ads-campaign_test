// ad.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { AdService } from './ad-campaign.service';

@Controller('ads')
export class AdController {
  constructor(private readonly adService: AdService) {}

  @Post()
  async create(@Body() createAdDto: CreateAdDto) {
    return this.adService.create(createAdDto);
  }

  @Get()
  async findAll() {
    return this.adService.findAll(); // Assuming you have a method in your service to fetch all ads
  }
}
