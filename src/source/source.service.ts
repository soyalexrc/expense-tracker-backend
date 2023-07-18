import { Injectable } from '@nestjs/common';
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from './dto/update-source.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Source} from "./entities/source.entity";

@Injectable()
export class SourceService {

  constructor(
      @InjectModel(Source.name) private sourceModel: Model<Source>,
  ) {
  }
  async create(createSourceDto: CreateSourceDto) {
    try {
      const data = await this.sourceModel.create(createSourceDto);
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
      const data = await this.sourceModel.find().populate('typeSource');
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
      const data = await this.sourceModel.findById(id);
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err)
    }
  }

  async update(id: string, updateSourceDto: UpdateSourceDto) {
    try {
      const source = await this.sourceModel.findById(id)
      if (!source) return { success: false, error: `Source with id ${id} not found.` };

      console.log(source);

      const updated = await source.updateOne(updateSourceDto);

      return {
        success: true,
        data: updated
      }


    } catch (err) {
      console.log(err);
    }
  }

  async remove(id: string) {
    try {
      const data = await this.sourceModel.deleteOne({_id: id});
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err)
    }
  }
}
