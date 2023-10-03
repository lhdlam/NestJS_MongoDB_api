import { InjectModel } from "@nestjs/mongoose";
import { BaseRepository } from "src/base.repository";
import { Upload } from "./entities/upload.entity";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";


@Injectable()
export class UploadRepository extends BaseRepository<Upload>{
  constructor(
    @InjectModel('Upload')
    private readonly uploadModel: Model<Upload>,
  ){
    super(uploadModel);
  }
}