import { Schema, Document } from 'mongoose';

const UploadSchema = new Schema(
  {
    name: String,
    file_name: String,
    mime_type: String,
    size: Number,
    key: String,
    created_at: { type: Date, default: Date.now },
  },
  {
    collection: 'file_upload',
  },
);

export { UploadSchema };

export interface Upload extends Document {
  name: string;
  file_name: string;
  mime_type: string;
  size: number;
  key: string;
  created_at: Date;
}
