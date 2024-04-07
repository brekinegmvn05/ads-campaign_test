// ad.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateAdDto } from './dto/create-ad.dto';

@Injectable()
export class AdService {
  private prisma = new PrismaClient();

  async create(createAdDto: CreateAdDto) {
    return this.prisma.ad.create({
      data: createAdDto,
    });
  }

  async findAll() {
    return this.prisma.ad.findMany(); // Assuming you have a method in your Prisma service to find all ads
  }
}
