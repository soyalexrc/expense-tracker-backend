import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Expense, ExpenseSchema} from "./entities/expense.entity";
import {UtilsService} from "../common/utils/utils.service";

@Module({
  imports: [
      MongooseModule.forFeature([{name: Expense.name, schema: ExpenseSchema}])
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService, UtilsService]
})
export class ExpenseModule {}
