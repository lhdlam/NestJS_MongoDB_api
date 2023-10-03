import { IsNotEmpty, IsString } from "class-validator";


export class CreateEventDto{
  @IsNotEmpty() 
  @IsString()
  title: string;

  @IsNotEmpty() 
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  image_url!: string
}