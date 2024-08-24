import { Test, TestingModule } from '@nestjs/testing';
import { PeoresPeliculasService } from './peores-peliculas.service';

describe('PeoresPeliculasService', () => {
  let service: PeoresPeliculasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeoresPeliculasService],
    }).compile();

    service = module.get<PeoresPeliculasService>(PeoresPeliculasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
