import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {Category} from "../../category/entities/category.entity";
import {User} from "../../user/entities/user.entity";
import {Payment} from "../../payment/entities/payment.entity";
import {Subscription} from "../../subscription/entities/subscription.entity";
import {Debt} from "../../debt/entities/debt.entity";

export type DebtPaymentDocument = HydratedDocument<DebtPayment>;

@Schema({timestamps: true})
export class DebtPayment {

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'Payment'})
    payment: Payment;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'Debt'})
    debt: Debt;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop()
    description: string;
}

export const DebtPaymentSchema = SchemaFactory.createForClass(DebtPayment);

