import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/base.repository";
import { Event } from "./event.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class EventRepository extends BaseRepository<Event>{
  constructor(
    @InjectModel('Event')
    private readonly eventModel: Model<Event>,
  ){
    super(eventModel)
  }
}