import {IsString, MinLength, IsNumber, IsPositive, IsDate, IsOptional, Min} from 'class-validator'


export class CreateDebtDto {

    @IsNumber()
    @IsPositive()
    totalAmount: number;

    @IsNumber()
    @IsPositive()
    amountRemaining: number;

    @IsString()
    @MinLength(10)
    nextDueDate: Date;

    @IsString()
    @MinLength(10)
    totalDueDate: Date;

    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    currency: string;

    @IsString()
    @IsOptional()
    identification: string;

}
