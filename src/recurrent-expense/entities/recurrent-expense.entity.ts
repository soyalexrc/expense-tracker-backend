import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {Category} from "../../category/entities/category.entity";
import {User} from "../../user/entities/user.entity";
import {Payment} from "../../payment/entities/payment.entity";
import {Subscription} from "../../subscription/entities/subscription.entity";

export type RecurrentExpenseDocument = HydratedDocument<RecurrentExpense>;

@Schema({timestamps: true})
export class RecurrentExpense {

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'Payment'})
    payment: Payment;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'Subscription'})
    subscription: Subscription;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;
}

export const RecurrentExpenseSchema = SchemaFactory.createForClass(RecurrentExpense);

