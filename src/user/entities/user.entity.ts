import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({ default: '' })
    location?: string;

    @Prop({ default: '' })
    birthdate?: string;

    @Prop({ default: '' })
    phoneNumber?: string;

    @Prop()
    date: Date

}

export const UserSchema = SchemaFactory.createForClass(User);




