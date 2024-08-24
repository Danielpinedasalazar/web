import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { PeoresPeliculas } from './peores-peliculas.entity';

@Controller('peores-peliculas')
export class PeoresPeliculasController {
  constructor(private readonly peoresPeliculasService: PeoresPeliculasService) {}

  @Post()
  create(@Body() peoresPelicula: Partial<PeoresPeliculas>) {
    return this.peoresPeliculasService.create(peoresPelicula);
  }

  @Get()
  findAll() {
    return this.peoresPeliculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.peoresPeliculasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<PeoresPeliculas>) {
    return this.peoresPeliculasService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.peoresPeliculasService.remove(id);
  }

  @Get('director/:directorId')
  findByDirector(@Param('directorId') directorId: number) {
    return this.peoresPeliculasService.findByDirector(directorId);
  }
}
