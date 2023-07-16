import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';

export type SourceDocument = HydratedDocument<Source>;

@Schema()
export class Source {
    @Prop()
    amountSpent: number;

    @Prop()
    title: string;

    @Prop()
    typeOfSource: string;

    @Prop()
    identification: string;

    @Prop()
    currency: string;

    @Prop()
    date: Date

}

export const SourceSchema = SchemaFactory.createForClass(Source);

