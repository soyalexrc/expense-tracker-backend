import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfSourceController } from './type-of-source.controller';
import { TypeOfSourceService } from './type-of-source.service';

describe('TypeOfSourceController', () => {
  let controller: TypeOfSourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOfSourceController],
      providers: [TypeOfSourceService],
    }).compile();

    controller = module.get<TypeOfSourceController>(TypeOfSourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
