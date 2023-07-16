import { Injectable } from '@nestjs/common';
import { CreateRecurrentExpenseDto } from './dto/create-recurrent-expense.dto';
import { UpdateRecurrentExpenseDto } from './dto/update-recurrent-expense.dto';

@Injectable()
export class RecurrentExpenseService {
  create(createRecurrentExpenseDto: CreateRecurrentExpenseDto) {
    return 'This action adds a new recurrentExpense';
  }

  findAll() {
    return `This action returns all recurrentExpense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recurrentExpense`;
  }

  update(id: number, updateRecurrentExpenseDto: UpdateRecurrentExpenseDto) {
    return `This action updates a #${id} recurrentExpense`;
  }

  remove(id: number) {
    return `This action removes a #${id} recurrentExpense`;
  }
}
