import { IsNotEmpty } from "class-validator";
import { HasMimeType, IsFile, MaxFileSize, MemoryStoredFile } from "nestjs-form-data";

export class CreateProductDTO {
  @IsNotEmpty()
  name: string;
  description: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  category: string;
  // @IsFile()
  // @MaxFileSize(1e6)
  // @HasMimeType(['image/jpeg', 'image/png'])
  image: string;

}