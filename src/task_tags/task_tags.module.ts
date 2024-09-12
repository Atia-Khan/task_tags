import { Module } from '@nestjs/common';
import { TaskTagsService } from './task_tags.service';
import { TaskTagsController } from './task_tags.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskTag,TaskTagsSchema } from './entities/task_tag.entity';
// import { Task_tags } from './dto/task_tags.dto';

@Module({
  imports: [
    MongooseModule.forFeature([{name: TaskTag.name, schema: TaskTagsSchema}])
  ],
  controllers: [TaskTagsController],
  providers: [TaskTagsService],
})
export class TaskTagsModule {}
