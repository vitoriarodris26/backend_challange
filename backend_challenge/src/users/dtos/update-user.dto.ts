import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class UpdateUserDto {
  
  @ApiProperty({ description: 'Email of the user', required: false })
  @IsString()
  email: string;
  
  @ApiProperty({ description: 'Fullname of the user', required: false })
  @IsOptional()
  @IsString()
  fullname?: string;
  
  @ApiProperty({ description: 'Indicates if the user is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Phone number of the user', required: false })
  @IsOptional()
  @IsNumber()
  phoneNumber?: number;
}
