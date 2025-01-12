import { Test, TestingModule } from '@nestjs/testing';
import { McdonaldsController } from './mcdonalds.controller';

describe('McdonaldsController', () => {
  let controller: McdonaldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [McdonaldsController],
    }).compile();

    controller = module.get<McdonaldsController>(McdonaldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
