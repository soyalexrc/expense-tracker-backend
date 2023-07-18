import { Injectable } from '@nestjs/common';
import { CreateDebtDto } from './dto/create-debt.dto';
import { UpdateDebtDto } from './dto/update-debt.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Debt} from "./entities/debt.entity";

@Injectable()
export class DebtService {

  constructor(
      @InjectModel(Debt.name) private debtModel: Model<Debt>,
  ) {
  }


  async create(createDebtDto: CreateDebtDto) {
    try {
      const data = await this.debtModel.create(createDebtDto);
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err)
    }
  }

  async findAll() {
    try {
      const data = await this.debtModel.find();
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err)
    }
  }

  async findOne(id: string) {
    try {
      const data = await this.debtModel.findById(id);
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err)
    }
  }

  update(id: string, updateDebtDto: UpdateDebtDto) {
    return `This action updates a #${id} debt`;
  }

  async remove(id: string) {
    try {
      const data = await this.debtModel.deleteOne( {_id: id});
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err)
    }
  }
}
