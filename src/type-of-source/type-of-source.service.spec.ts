import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfSourceService } from './type-of-source.service';

describe('TypeOfSourceService', () => {
  let service: TypeOfSourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfSourceService],
    }).compile();

    service = module.get<TypeOfSourceService>(TypeOfSourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
