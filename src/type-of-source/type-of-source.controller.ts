import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfSourceService } from './type-of-source.service';
import { CreateTypeOfSourceDto } from './dto/create-type-of-source.dto';
import { UpdateTypeOfSourceDto } from './dto/update-type-of-source.dto';

@Controller('type-of-source')
export class TypeOfSourceController {
  constructor(private readonly typeOfSourceService: TypeOfSourceService) {}

  @Post()
  create(@Body() createTypeOfSourceDto: CreateTypeOfSourceDto) {
    return this.typeOfSourceService.create(createTypeOfSourceDto);
  }

  @Get()
  findAll() {
    return this.typeOfSourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeOfSourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeOfSourceDto: UpdateTypeOfSourceDto) {
    return this.typeOfSourceService.update(+id, updateTypeOfSourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeOfSourceService.remove(+id);
  }
}
