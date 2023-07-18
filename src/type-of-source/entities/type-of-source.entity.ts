import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {Source} from "../../source/entities/source.entity";

export type TypeSourceDocument = HydratedDocument<TypeSource>;

@Schema({timestamps: true})
export class TypeSource {

    @Prop()
    title: string;

}

export const TypeSourceSchema = SchemaFactory.createForClass(TypeSource);

