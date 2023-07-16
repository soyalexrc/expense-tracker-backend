import {IsString, MinLength, IsOptional, IsDate, IsObject } from 'class-validator'

export class CreateUserDto {


    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @MinLength(1)
    email: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    location: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    ip: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    birthdate: string;

    @IsDate()
    @MinLength(1)
    @IsOptional()
    phoneNumber: string;

    @IsString()
    @IsOptional()
    credential: string;


}
