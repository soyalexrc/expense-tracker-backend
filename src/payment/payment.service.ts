import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Payment} from "./entities/payment.entity";

@Injectable()
export class PaymentService {

  constructor(
      @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {
  }
  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const data = await this.paymentModel.create(createPaymentDto);
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
      const data = await this.paymentModel.find().populate({
        path: 'source',
        populate: {
          path: 'typeSource'
        }
      });
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  async remove(id: string) {
    try {
      const data = await this.paymentModel.deleteOne({_id: id});
      return {
        success: true,
        data
      }
    } catch (err) {
      console.log(err)
    }
  }
}
