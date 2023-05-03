import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema()
export class Expense {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    category: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);

