import { PartialType } from '@nestjs/mapped-types';
import { TaskTagsDto } from './task_tags.dto';

export class UpdateTaskTagDto extends PartialType(TaskTagsDto) {}
