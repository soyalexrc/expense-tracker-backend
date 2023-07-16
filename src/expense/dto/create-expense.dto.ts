import {IsString, MinLength, IsNumber, IsPositive, IsDate } from 'class-validator'
import {Type} from 'class-transformer'

export class CreateExpenseDto {


    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    description: string;

    @IsString()
    @MinLength(1)
    category: string;

    @IsString()
    @MinLength(1)
    user: string;

    @IsString()
    @MinLength(1)
    currency: string;

    @IsNumber()
    @IsPositive()
    amount: number;

    @IsDate()
    @Type(() => Date)
    date: Date;
}
