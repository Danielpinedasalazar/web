import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DirectoresService } from './directores.service';
import { Director } from './director.entity';

@Controller('directores')
export class DirectoresController {
  constructor(private readonly directoresService: DirectoresService) {}

  @Post()
  create(@Body() director: Partial<Director>) {
    return this.directoresService.create(director);
  }

  @Get()
  findAll() {
    return this.directoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.directoresService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<Director>) {
    return this.directoresService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.directoresService.remove(id);
  }
}
