import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats = [
    {
      name: 'Cat1',
      age: 1,
      breed: 'Breed1',
    },
    {
      name: 'Cat2',
      age: 2,
      breed: 'Breed2',
    },
  ];

  getAllCats() {
    return this.cats;
  }

  createCat(cat) {
    this.cats.push(cat);
    return `Cat ${cat.name} created`;
  }
}
