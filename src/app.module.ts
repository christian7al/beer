import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigModule } from './db/typeorm.module';
import { BeerController } from './controllers/beer.controller';
import { BeerService } from './services/beer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beer } from './db/beer.entity';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Beer])],
  controllers: [AppController, BeerController],
  providers: [AppService, BeerService],
})
export class AppModule {}
