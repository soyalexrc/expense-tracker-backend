import {IsString} from "class-validator";

export class CreateDebtPaymentDto {
    @IsString()
    payment: string;

    @IsString()
    debt: string;

    @IsString()
    user: string;

    @IsString()
    description: string;
}
