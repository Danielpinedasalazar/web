import { Test, TestingModule } from '@nestjs/testing';
import { PeoresPeliculasController } from './peores-peliculas.controller';

describe('PeoresPeliculasController', () => {
  let controller: PeoresPeliculasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeoresPeliculasController],
    }).compile();

    controller = module.get<PeoresPeliculasController>(PeoresPeliculasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
