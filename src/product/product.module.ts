import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose'; // 1. Import mongoose module
import { ProductSchema } from './schemas/product.schema'; // 2. Import product schema
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    // 3. Setup the mongoose module to use the product schema
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
