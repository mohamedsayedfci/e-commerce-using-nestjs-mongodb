import { IsNotEmpty } from "class-validator";

export class ItemDTO {
  @IsNotEmpty()
  productId: string;
  name: string;
  @IsNotEmpty()
  quantity: number;
  price: number;
}