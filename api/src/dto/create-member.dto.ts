import { IsString, IsNotEmpty, IsDateString, IsBoolean } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsString()
  @IsNotEmpty()
  plan: string;

  @IsDateString()
  start_date: string; // ISO date string

  @IsBoolean()
  active: boolean;
}
