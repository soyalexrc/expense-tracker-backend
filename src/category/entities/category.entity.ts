import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {User} from "../../user/entities/user.entity";

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    color: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

