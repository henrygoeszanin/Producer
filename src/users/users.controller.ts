import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly ordersService: UsersService) {}

  @Post()
  placeOrder(@Body() order: UserDto) {
    return this.ordersService.placeOrder(order);
  }
}
