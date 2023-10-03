import { Injectable, NotFoundException } from '@nestjs/common';
import { EventRepository } from './event.repository';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository){}

  async createEvent(createEventDto: CreateEventDto){
    return await this.eventRepository.create(createEventDto)
  }

  async findOne(id: string) {
    return await this.eventRepository.findByCondition({_id: id}, 'title image_url')
  }

  async findAll(){
    return await this.eventRepository.findAll()
  }

  async remove(id: string) {
    await this.eventRepository.deleteOne(id)
    return `This action removes a #${id} task`;
  }

  async updateEvent(id: string, updateTaskDto: UpdateEventDto){
    await this.eventRepository.findByIdAndUpdate(id, updateTaskDto)
    return await this.eventRepository.findById(id)
  }
}
