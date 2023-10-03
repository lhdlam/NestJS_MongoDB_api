import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadSchema } from './entities/upload.entity';
import { ConfigModule } from '@nestjs/config';
import { UploadRepository } from './upload.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Upload',
        schema: UploadSchema,
      },
    ]),
    ConfigModule,
  ],
  controllers: [UploadController],
  providers: [UploadService, UploadRepository]
})
export class UploadModule {}
