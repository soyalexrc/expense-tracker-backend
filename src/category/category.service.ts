import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Category} from "./entities/category.entity";

@Injectable()
export class CategoryService {

  constructor(
      @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {
  }

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoryModel.create( createCategoryDto );
    } catch (error: any) {
      console.log(error);
    }
  }

  async findAll() {
    return  this.categoryModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async findByUserId(userId: string) {
    return this.categoryModel.find({user: userId })
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  async remove(id: string) {
    const { deletedCount } = await this.categoryModel.deleteOne({ _id: id });
    if ( deletedCount === 0 )
      throw new BadRequestException(`Expense with id "${ id }" not found`);

    return {message: 'Se elimino con exito!'};
  }
}
