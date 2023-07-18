import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {TypeSource} from "../../type-of-source/entities/type-of-source.entity";

export type SourceDocument = HydratedDocument<Source>;

@Schema({timestamps: true})
export class Source {

    @Prop()
    title: string;

    @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'TypeSource'})
    typeSource: TypeSource;

    @Prop()
    identification: string;

}

export const SourceSchema = SchemaFactory.createForClass(Source);

