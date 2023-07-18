import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Subscription, SubscriptionSchema} from "./entities/subscription.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Subscription.name, schema: SubscriptionSchema}])
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService]
})
export class SubscriptionModule {}
