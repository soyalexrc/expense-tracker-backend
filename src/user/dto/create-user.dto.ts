import {IsString, MinLength, IsOptional, IsDate, IsObject } from 'class-validator'

export class CreateUserDto {


    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @MinLength(1)
    lastname: string;

    @IsString()
    @MinLength(1)
    password: string;

    @IsString()
    @MinLength(1)
    email: string;

    @IsString()
    @IsOptional()
    location: string;


    @IsString()
    @MinLength(1)
    birthdate: string;

    @IsString()
    @IsOptional()
    phoneNumber: string;

}
