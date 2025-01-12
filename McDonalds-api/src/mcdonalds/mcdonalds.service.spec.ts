import { Test, TestingModule } from '@nestjs/testing';
import { McdonaldsService } from './mcdonalds.service';

describe('McdonaldsService', () => {
  let service: McdonaldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [McdonaldsService],
    }).compile();

    service = module.get<McdonaldsService>(McdonaldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
