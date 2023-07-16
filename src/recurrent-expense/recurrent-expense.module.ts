import { Module } from '@nestjs/common';
import { RecurrentExpenseService } from './recurrent-expense.service';
import { RecurrentExpenseController } from './recurrent-expense.controller';

@Module({
  controllers: [RecurrentExpenseController],
  providers: [RecurrentExpenseService]
})
export class RecurrentExpenseModule {}
