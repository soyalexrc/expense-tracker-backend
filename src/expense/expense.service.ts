import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Expense} from "./entities/expense.entity";
import {Model} from "mongoose";

@Injectable()
export class ExpenseService {

  constructor(
      @InjectModel(Expense.name) private expenseModel: Model<Expense>
  ) {
  }
  create(createExpenseDto: CreateExpenseDto) {
    return 'This action adds a new expense';
  }

  async findAll(): Promise<Expense[]> {
    return this.expenseModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
