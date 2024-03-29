import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema({timestamps: true})
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: '', required: false })
    location?: string;

    @Prop({ required: true})
    birthdate: Date;

    @Prop({ default: '' })
    phoneNumber?: string;

}

export const UserSchema = SchemaFactory.createForClass(User);




