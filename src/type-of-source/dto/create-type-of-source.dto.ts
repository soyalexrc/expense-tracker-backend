import {IsString, MinLength} from "class-validator";

export class CreateTypeOfSourceDto {
    @IsString()
    @MinLength(1)
    title: string;
}
