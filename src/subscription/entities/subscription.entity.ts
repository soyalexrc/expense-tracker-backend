import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';

export type SubscriptionDocument = HydratedDocument<Subscription>;

// stringdate = xx de cada xxxx

@Schema({timestamps: true})
export class Subscription {

    @Prop()
    title: string;

    @Prop()
    installment: number;

    @Prop()
    currency: string;

    @Prop()
    nextDueDate: Date;

    @Prop()
    stringDate: string;

}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);

