// task_tags.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskTag, TaskTagsDocument } from './entities/task_tag.entity';
import { TaskTagsDto } from './dto/task_tags.dto';

@Injectable()
export class TaskTagsService {
  constructor(
    @InjectModel(TaskTag.name) private readonly taskTagModel: Model<TaskTagsDocument>,
  ) {}

  // Create a new task tag
  async create(createTaskTagDto: TaskTagsDto): Promise<TaskTag> {
    const newTaskTag = new this.taskTagModel(createTaskTagDto);
    return newTaskTag.save();
  }

  // Find all task tags
  async findAll(): Promise<TaskTag[]> {
    return this.taskTagModel.find().exec();
  }

  // Find a specific task tag by ID
  async findOne(id: string): Promise<TaskTag> {
    const taskTag = await this.taskTagModel.findById(id).exec();
    if (!taskTag) {
      throw new NotFoundException(`Task tag with ID ${id} not found`);
    }
    return taskTag;
  }

  // Update a specific task tag by ID
  async update(id: string, updateTaskTagDto: TaskTagsDto): Promise<TaskTag> {
    const updatedTaskTag = await this.taskTagModel
      .findByIdAndUpdate(id, updateTaskTagDto, { new: true })
      .exec();
    
    if (!updatedTaskTag) {
      throw new NotFoundException(`Task tag with ID ${id} not found`);
    }
    return updatedTaskTag;
  }

  // Delete a specific task tag by ID
  async delete(id: string): Promise<void> {
    const result = await this.taskTagModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Task tag with ID ${id} not found`);
    }
  }
}
