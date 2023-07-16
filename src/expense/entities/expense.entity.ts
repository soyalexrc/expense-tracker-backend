import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {Category} from "../../category/entities/category.entity";
import {User} from "../../user/entities/user.entity";

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema()
export class Expense {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'Category'})
    category: Category;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop()
    date: Date
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);

