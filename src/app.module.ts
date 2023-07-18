import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseModule } from './expense/expense.module';
import { CommonModule } from './common/common.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { SourceModule } from './source/source.module';
import { RecurrentExpenseModule } from './recurrent-expense/recurrent-expense.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { DebtModule } from './debt/debt.module';
import { DebtPaymentModule } from './debt-payment/debt-payment.module';
import { TypeOfSourceModule } from './type-of-source/type-of-source.module';


@Module({
  imports: [
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (config: ConfigService) => ({
    //     uri: config.get<string>('URI')
    //   })
    // }),
    MongooseModule.forRoot('mongodb+srv://alexcarvajal2404:pollito21@expense-tracker.zini4ej.mongodb.net/test'),
    ConfigModule.forRoot(),
    ExpenseModule,
    CommonModule,
    CategoryModule,
    UserModule,
    PaymentModule,
    SourceModule,
    RecurrentExpenseModule,
    SubscriptionModule,
    DebtModule,
    DebtPaymentModule,
    TypeOfSourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
}

