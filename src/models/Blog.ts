import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string; // Markdown content
  excerpt: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String, default: '' },
    tags: { type: [String], default: [] },
    coverImage: { type: String, required: false },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// This ensures that the model is only compiled once
const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
