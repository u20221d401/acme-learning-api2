import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../../../../domain/model/events/user-created.event';
import { User } from '../../../../domain/model/aggregates/user.entity';
@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  handle(event: UserCreatedEvent) {
    console.log(`UserCreateEvent: ${event}`);
  }
}
