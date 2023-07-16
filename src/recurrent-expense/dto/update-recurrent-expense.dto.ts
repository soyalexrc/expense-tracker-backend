import { PartialType } from '@nestjs/mapped-types';
import { CreateRecurrentExpenseDto } from './create-recurrent-expense.dto';

export class UpdateRecurrentExpenseDto extends PartialType(CreateRecurrentExpenseDto) {}
