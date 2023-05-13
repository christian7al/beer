import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBeerDto, UpdateBeerDto } from 'src/controllers/beer.dto';
import { Beer } from 'src/db/beer.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BeerService {
  constructor(@InjectRepository(Beer) private beerRepo: Repository<Beer>) {}

  async getBeers(name?: string): Promise<Beer[]> {
    if (name) {
      return await this.beerRepo
        .createQueryBuilder('beer')
        .where('beer.name ilike :name', { name: `%${name}%` })
        .getMany();
    }
    return await this.beerRepo.find();
  }

  async createBeer(params: CreateBeerDto): Promise<Beer> {
    return this.beerRepo.save(params);
  }

  async updateBeer(id: string, params: UpdateBeerDto): Promise<UpdateResult> {
    return this.beerRepo.update(
      {
        id: id,
      },
      params,
    );
  }
}
