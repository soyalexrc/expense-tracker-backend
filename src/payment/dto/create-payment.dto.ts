import {IsArray, IsNumber, IsString} from "class-validator";

export class CreatePaymentDto {
    @IsNumber()
    amount: number;

    @IsString()
    source: string;

    @IsString()
    currency: string;

    @IsArray()
    evidence: Array<string>;
}
