import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecurrentExpenseService } from './recurrent-expense.service';
import { CreateRecurrentExpenseDto } from './dto/create-recurrent-expense.dto';
import { UpdateRecurrentExpenseDto } from './dto/update-recurrent-expense.dto';

@Controller('recurrent-expense')
export class RecurrentExpenseController {
  constructor(private readonly recurrentExpenseService: RecurrentExpenseService) {}

  @Post()
  create(@Body() createRecurrentExpenseDto: CreateRecurrentExpenseDto) {
    return this.recurrentExpenseService.create(createRecurrentExpenseDto);
  }

  @Get()
  findAll() {
    return this.recurrentExpenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recurrentExpenseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecurrentExpenseDto: UpdateRecurrentExpenseDto) {
    return this.recurrentExpenseService.update(+id, updateRecurrentExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recurrentExpenseService.remove(+id);
  }
}
