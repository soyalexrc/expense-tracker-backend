import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Source} from "../source/entities/source.entity";
import {Model} from "mongoose";
import {Subscription} from "./entities/subscription.entity";

@Injectable()
export class SubscriptionService {

  constructor(
      @InjectModel(Subscription.name) private subscriptionModel: Model<Subscription>,
  ) {
  }
  async create(createSubscriptionDto: CreateSubscriptionDto) {
    try {
      const data = await this.subscriptionModel.create(createSubscriptionDto)
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
      const data = await this.subscriptionModel.find();
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
