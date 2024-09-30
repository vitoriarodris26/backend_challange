import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, isNotEmpty, IsNotEmpty, IsNumber,  IsString } from "class-validator";

export class RequestUserDto{
  @ApiProperty({ description: 'Email of the user', required: false })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Fullname of the user', required: false })
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @ApiProperty({ description: 'Indicates if the user is active', required: false })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Phone number of the user', required: false })
  @IsNumber()
  @IsNotEmpty()
  phoneNumber?: number;

}