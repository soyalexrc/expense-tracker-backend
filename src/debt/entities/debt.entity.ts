import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {Source} from "../../source/entities/source.entity";

type CardOptions = {
    cardNumber: string;
}

export type DebtDocument = HydratedDocument<Debt>;

@Schema({ timestamps: true})
export class Debt {
    @Prop()
    totalAmount: number;

    @Prop()
    amountRemaining: number;

    @Prop()
    nextDueDate: Date;

    @Prop()
    totalDueDate: Date;

    @Prop()
    title: string;

    @Prop()
    identification: string;

    @Prop()
    currency: string;
}

export const DebtSchema = SchemaFactory.createForClass(Debt);

