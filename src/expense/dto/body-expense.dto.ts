import {IsString, MinLength, IsNumber, IsPositive, IsDate, IsOptional } from 'class-validator'
import {Type} from 'class-transformer'

export class BodyExpenseDto {

    @IsString()
    @IsOptional()
    @MinLength(1)
    category: string;

    @IsString()
    @MinLength(1)
    user: string;

    @IsString()
    @IsOptional()
    @MinLength(1)
    currency: string;

    @IsNumber()
    @IsPositive()
    daysFrom: number;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    dateFrom?: Date;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    dateTo?: Date;
}
