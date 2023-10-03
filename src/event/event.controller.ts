import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventService } from './event.service';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService){}

  @Post()
  createEvent(@Body() createEvent: CreateEventDto){
    return this.eventService.createEvent(createEvent);
  }

  @Get()
  findAll(){
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id:string,
        @Body() updateEventDto: UpdateEventDto)
  {
    return this.eventService.updateEvent(id, updateEventDto)
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
