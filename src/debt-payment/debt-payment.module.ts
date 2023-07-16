import { Module } from '@nestjs/common';
import { DebtPaymentService } from './debt-payment.service';
import { DebtPaymentController } from './debt-payment.controller';

@Module({
  controllers: [DebtPaymentController],
  providers: [DebtPaymentService]
})
export class DebtPaymentModule {}
