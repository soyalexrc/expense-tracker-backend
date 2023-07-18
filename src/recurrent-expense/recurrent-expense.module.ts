import { Module } from '@nestjs/common';
import { RecurrentExpenseService } from './recurrent-expense.service';
import { RecurrentExpenseController } from './recurrent-expense.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {RecurrentExpense, RecurrentExpenseSchema} from "./entities/recurrent-expense.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{name: RecurrentExpense.name, schema: RecurrentExpenseSchema}])
  ],
  controllers: [RecurrentExpenseController],
  providers: [RecurrentExpenseService]
})
export class RecurrentExpenseModule {}
