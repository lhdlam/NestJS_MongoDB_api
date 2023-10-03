import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, UploadedFiles, HttpStatus, HttpException } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file) {
    console.log(file.size);
    if (file.size>100000){
      throw new HttpException("Dung luong qua lon < 100kb",HttpStatus.BAD_REQUEST ) ;
    }
    return await this.uploadService.upload(file);
  }

  @Post('multi')
  @UseInterceptors(FilesInterceptor('files'))
  async uploads(@UploadedFiles() files) {
    const medias = [];
    for (const item of files) {
      medias.push(await this.uploadService.upload(item));
    }
    return medias;
  }
  
  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(id);
  }
}
