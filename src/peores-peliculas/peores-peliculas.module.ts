import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { PeoresPeliculasController } from './peores-peliculas.controller';
import { PeoresPeliculas } from './peores-peliculas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PeoresPeliculas])],
  providers: [PeoresPeliculasService],
  controllers: [PeoresPeliculasController],
  exports: [PeoresPeliculasService],
})
export class PeoresPeliculasModule {}
