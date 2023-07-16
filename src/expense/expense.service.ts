import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Expense} from "./entities/expense.entity";
import {Model} from "mongoose";
import {UtilsService} from "../common/utils/utils.service";
import {BodyExpenseDto} from "./dto/body-expense.dto";

@Injectable()
export class ExpenseService {

  constructor(
      @InjectModel(Expense.name) private expenseModel: Model<Expense>,
      private utilsService: UtilsService
  ) {
  }
  async create(createExpenseDto: CreateExpenseDto) {
    console.log(createExpenseDto)
    try {
      return await this.expenseModel.create( createExpenseDto );
    } catch (error: any) {
      this.utilsService.handleExceptions(error);
    }
  }

  async findAll(){
    const data = await this.expenseModel.find().populate(['category']);

    return {
      results: data
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  async findByUser(body: BodyExpenseDto) {
    console.log(body);
    const results = await  this.expenseModel.find({
      user: body.user,
      category: body.category,
      date: {
        $gte: new Date(body.dateFrom),
        $lt: new Date(body.dateTo),
      // $gte: body.dateFrom
      // ,$lt: body.dateTo
      //   $gte: new Date((new Date().getTime() - (body.daysFrom * 24 * 60 * 60 * 1000)))
      }
    })
        .populate(['category'])
        .sort({ date: -1})


    return {
      results
    }

  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  async remove(id: string) {
    const { deletedCount } = await this.expenseModel.deleteOne({ _id: id });
    if ( deletedCount === 0 )
      throw new BadRequestException(`Expense with id "${ id }" not found`);

    return {message: 'Se elimino con exito!'};
  }
}
