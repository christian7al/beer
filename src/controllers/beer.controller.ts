import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { BeerService } from 'src/services/beer.service';
import { CreateBeerDto, UpdateBeerDto } from './beer.dto';

@Controller()
export class BeerController {
  constructor(private readonly beerService: BeerService) {}

  @Get('beers')
  async getBeers(@Query('name') name?: string) {
    return await this.beerService.getBeers(name);
  }

  @Post('beers')
  @ApiBody({ type: CreateBeerDto })
  async createBeer(@Body() params: CreateBeerDto) {
    return await this.beerService.createBeer(params);
  }

  @Patch('beers/:id')
  @ApiBody({ type: UpdateBeerDto })
  async updateBeer(@Body() params: UpdateBeerDto, @Param('id') id: string) {
    return await this.beerService.updateBeer(id, params);
  }
}
