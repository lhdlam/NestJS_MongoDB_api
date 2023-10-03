import { Schema, Document } from 'mongoose';

const EventSchema = new Schema(
  {
    title: String,
    description: String,
    image_url: String,
    created_at: { type: Date, default: Date.now },
  },
  {
    collection: 'event',
  },
);

export { EventSchema };

export interface Event extends Document {
  title: string,
  description: string,
  image_url: string,
  created_at: Date;
}
