import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {Source} from "../../source/entities/source.entity";

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({timestamps: true})
export class Payment {
    @Prop()
    amount: number;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'Source'})
    source: Source;

    @Prop()
    currency: string;

    @Prop()
    evidence: Array<string>;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);

