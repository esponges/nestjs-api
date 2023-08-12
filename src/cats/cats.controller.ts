import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  getAllCats() {
    return this.catService.getAllCats();
  }

  @Post()
  createCat(@Body() cat: CreateCatDto) {
    this.catService.createCat(cat);
  }
}
