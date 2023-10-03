import { IsNotEmpty, IsString } from "class-validator";


export class UpdateEventDto{
  title: string;
  description?: string;
  image_url!: string
}