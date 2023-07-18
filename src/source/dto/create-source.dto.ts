import {IsOptional, IsString, MinLength} from "class-validator";

export class CreateSourceDto {
    @IsString()
    @MinLength(1)
    title: string;


    @IsString()
    @MinLength(1)
    typeSource: string;

    @IsString()
    @IsOptional()
    identification: string;
}
