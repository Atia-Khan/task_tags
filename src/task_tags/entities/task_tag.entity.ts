// task_tags.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskTagsDocument = TaskTag & Document;

@Schema({ timestamps: true, collection: 'tl_task_tags' })
export class TaskTag {
  @Prop({ required: true })
  task_id: string;

  @Prop({ required: true })
  task_name: string;

  @Prop({ required: true })
  tag_id: string;

  @Prop({ required: true })
  tag_name: string;
}

export const TaskTagsSchema = SchemaFactory.createForClass(TaskTag);
