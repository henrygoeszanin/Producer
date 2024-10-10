import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private rabbitClient: ClientProxy) {}

  placeOrder(user: UserDto) {
    this.rabbitClient.emit('user-created', user);

    return { message: 'user created' };
  }
}
