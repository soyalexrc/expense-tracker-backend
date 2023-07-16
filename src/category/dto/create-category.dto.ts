import {IsString, MinLength, IsNumber, IsPositive, IsDate, IsOptional} from 'class-validator'

export class CreateCategoryDto {


    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    description: string;

    @IsString()
    @MinLength(1)
    color: string;

    @IsString()
    user: string;
}
