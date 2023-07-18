import {IsString} from "class-validator";

export class CreateRecurrentExpenseDto {
    @IsString()
    payment: string;

    @IsString()
    subscription: string;

    @IsString()
    user: string;
}
