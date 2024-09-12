import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskTagsModule } from './task_tags/task_tags.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRoot(process.env.TASK_TAGS_DATABASE_URL),
    TaskTagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
