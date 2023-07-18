import { Injectable } from '@nestjs/common';
import { CreateRecurrentExpenseDto } from './dto/create-recurrent-expense.dto';
import { UpdateRecurrentExpenseDto } from './dto/update-recurrent-expense.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {RecurrentExpense} from "./entities/recurrent-expense.entity";

@Injectable()
export class RecurrentExpenseService {

  constructor(
      @InjectModel(RecurrentExpense.name) private recurrentExpenseModel: Model<RecurrentExpense>,
  ) {
  }
  async create(createRecurrentExpenseDto: CreateRecurrentExpenseDto) {
    try {
      const data = await this.recurrentExpenseModel.create(createRecurrentExpenseDto);
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err);
    }
  }

  async findAll() {
    try {
      const data = await this.recurrentExpenseModel
          .find()
          .populate('subscription')
          .populate({
            path: 'payment',
            populate: {
              path: 'source',
              populate: {
                path: 'typeSource'
              }
            }
          })
      ;
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err);
    }
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
