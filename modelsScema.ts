// models.ts
import * as mongoose from 'mongoose';

// Define User schema and model
export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = mongoose.model('User', UserSchema);

// Define Admin schema and model
export const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const Admin = mongoose.model('Admin', AdminSchema);

// Define Category schema and model
export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export const Category = mongoose.model('Category', CategorySchema);

// Define Brand schema and model
export const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export const Brand = mongoose.model('Brand', BrandSchema);

// Define Tag schema and model
export const TagSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export const Tag = mongoose.model('Tag', TagSchema);

// Define Product schema and model
export const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
});

export const Product = mongoose.model('Product', ProductSchema);
