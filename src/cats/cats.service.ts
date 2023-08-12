import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats = [];

  getAllCats() {
    return this.cats;
  }

  createCat(cat) {
    this.cats.push(cat);
  }
}
