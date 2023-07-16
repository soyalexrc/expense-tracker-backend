import { Test, TestingModule } from '@nestjs/testing';
import { RecurrentExpenseController } from './recurrent-expense.controller';
import { RecurrentExpenseService } from './recurrent-expense.service';

describe('RecurrentExpenseController', () => {
  let controller: RecurrentExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecurrentExpenseController],
      providers: [RecurrentExpenseService],
    }).compile();

    controller = module.get<RecurrentExpenseController>(RecurrentExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
