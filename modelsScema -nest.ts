// ecommerce.models.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: UserRole, default: UserRole.USER })
  role: UserRole;
}

@Schema()
export class Category extends Document {
  @Prop({ required: true })
  name: string;
}

@Schema()
export class Brand extends Document {
  @Prop({ required: true })
  name: string;
}

@Schema()
export class Tag extends Document {
  @Prop({ required: true })
  name: string;
}

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'Tag' }] })
  tags: Tag[];

  @Prop({ type: Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ type: Schema.Types.ObjectId, ref: 'Brand' })
  brand: Brand;
}

export const UserSchema = SchemaFactory.createForClass(User);
export const CategorySchema = SchemaFactory.createForClass(Category);
export const BrandSchema = SchemaFactory.createForClass(Brand);
export const TagSchema = SchemaFactory.createForClass(Tag);
export const ProductSchema = SchemaFactory.createForClass(Product);
