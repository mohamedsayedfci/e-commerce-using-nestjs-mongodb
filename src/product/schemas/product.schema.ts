import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  category: string;
  
  @Prop()
  image: string;
}


export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.path('image').get(function (v) {
  if(v)
  return process.env.baseUrl +v;
else
return '';
});
ProductSchema.set('toJSON', { getters: true, virtuals: false });