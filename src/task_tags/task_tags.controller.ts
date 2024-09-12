// task_tags.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TaskTagsService } from './task_tags.service';
import { TaskTagsDto } from './dto/task_tags.dto';
import { TaskTag } from './entities/task_tag.entity';

@Controller('task-tags')
export class TaskTagsController {
  constructor(private readonly taskTagsService: TaskTagsService) {}

  // POST method to create a new task tag
  @Post()
  async create(@Body() createTaskTagDto: TaskTagsDto): Promise<TaskTag> {
    return this.taskTagsService.create(createTaskTagDto);
  }

  // GET method to retrieve all task tags
  @Get()
  async findAll(): Promise<TaskTag[]> {
    return this.taskTagsService.findAll();
  }

  // GET method to retrieve a specific task tag by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TaskTag> {
    return this.taskTagsService.findOne(id);
  }

  // PUT method to update a specific task tag by ID
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskTagDto: TaskTagsDto,
  ): Promise<TaskTag> {
    return this.taskTagsService.update(id, updateTaskTagDto);
  }

  // DELETE method to remove a specific task tag by ID
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.taskTagsService.delete(id);
  }
}
