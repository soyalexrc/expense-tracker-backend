import {IsNumber, IsString} from "class-validator";

export class CreateSubscriptionDto {
    @IsString()
    title: string;

    @IsNumber()
    installment: number;

    @IsString()
    currency: string;

    @IsString()
    nextDueDate: Date;

    @IsString()
    stringDate: string;
}
