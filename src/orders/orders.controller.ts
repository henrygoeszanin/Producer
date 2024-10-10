import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './orderDto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  placeOrder(@Body() order: OrderDto) {
    return this.ordersService.placeOrder(order);
  }
}
