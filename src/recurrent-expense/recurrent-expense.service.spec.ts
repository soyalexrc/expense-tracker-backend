import { Test, TestingModule } from '@nestjs/testing';
import { RecurrentExpenseService } from './recurrent-expense.service';

describe('RecurrentExpenseService', () => {
  let service: RecurrentExpenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecurrentExpenseService],
    }).compile();

    service = module.get<RecurrentExpenseService>(RecurrentExpenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
