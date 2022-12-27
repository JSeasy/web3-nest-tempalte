import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
export class UserDto {
  @IsNotEmpty()
  userName: string;
  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto extends PartialType(UserDto) {}
