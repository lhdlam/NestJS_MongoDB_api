import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EventSchema } from './event.model';
import { EventRepository } from './event.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Event',
        schema: EventSchema,
      },
    ]),
    ConfigModule,
  ],
  controllers: [EventController],
  providers: [EventService, EventRepository]
})
export class EventModule {}
