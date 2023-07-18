import { Module } from '@nestjs/common';
import { DebtPaymentService } from './debt-payment.service';
import { DebtPaymentController } from './debt-payment.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {DebtPayment, DebtPaymentSchema} from "./entities/debt-payment.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{name: DebtPayment.name, schema: DebtPaymentSchema}])
  ],
  controllers: [DebtPaymentController],
  providers: [DebtPaymentService]
})
export class DebtPaymentModule {}
