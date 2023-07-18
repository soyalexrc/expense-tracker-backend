import {Injectable} from '@nestjs/common';
import {CreateDebtPaymentDto} from './dto/create-debt-payment.dto';
import {UpdateDebtPaymentDto} from './dto/update-debt-payment.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {DebtPayment} from "./entities/debt-payment.entity";

@Injectable()
export class DebtPaymentService {

    constructor(
        @InjectModel(DebtPayment.name) private debtPaymentModel: Model<DebtPayment>,
    ) {
    }

    async create(createDebtPaymentDto: CreateDebtPaymentDto) {
        try {
            const data = await this.debtPaymentModel.create(createDebtPaymentDto);
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
            const data = await this.debtPaymentModel
                .find()
                .populate('debt')
                .populate({
                    path: 'payment',
                    populate: {
                        path: 'source',
                        populate: {
                            path: 'typeSource'
                        }
                    }
                })
            return {
                success: true,
                data
            }
        } catch (err) {
            console.log(err);
        }
    }

    findOne(id: number) {
        return `This action returns a #${id} debtPayment`;
    }

    update(id: number, updateDebtPaymentDto: UpdateDebtPaymentDto) {
        return `This action updates a #${id} debtPayment`;
    }

    remove(id: number) {
        return `This action removes a #${id} debtPayment`;
    }
}
