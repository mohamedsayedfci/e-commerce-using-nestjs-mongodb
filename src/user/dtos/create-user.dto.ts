import { IsNotEmpty } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty()
  username: string;
  
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
  
  @IsNotEmpty()
  roles: string[];
}