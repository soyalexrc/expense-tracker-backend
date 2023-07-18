import { Injectable } from '@nestjs/common';
import { CreateTypeOfSourceDto } from './dto/create-type-of-source.dto';
import { UpdateTypeOfSourceDto } from './dto/update-type-of-source.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Debt} from "../debt/entities/debt.entity";
import {Model} from "mongoose";
import {TypeSource} from "./entities/type-of-source.entity";

@Injectable()
export class TypeOfSourceService {

  constructor(
      @InjectModel(TypeSource.name) private typeSourceModel: Model<TypeSource>,
  ) {
  }
  async create(createTypeOfSourceDto: CreateTypeOfSourceDto) {
    try {
      const data = await this.typeSourceModel.create(createTypeOfSourceDto)

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
      const data = await this.typeSourceModel.find()

      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} typeOfSource`;
  }

  update(id: number, updateTypeOfSourceDto: UpdateTypeOfSourceDto) {
    return `This action updates a #${id} typeOfSource`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeOfSource`;
  }
}
