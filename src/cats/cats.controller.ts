import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  getAllCats() {
    return this.catService.getAllCats();
  }

  @Post()
  createCat(@Body() cat) {
    this.catService.createCat(cat);
  }
}
