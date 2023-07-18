import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {Category} from "../../category/entities/category.entity";
import {User} from "../../user/entities/user.entity";
import {Payment} from "../../payment/entities/payment.entity";

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema({timestamps: true})
export class Expense {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'Payment'})
    payment: Payment;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'Category'})
    category: Category;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);

