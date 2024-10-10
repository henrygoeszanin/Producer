import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CONFIRMATION_CODE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'confirmationCode-queue',
          queueOptions: {
            durable: true,
          },
        },
      },
      {
        name: 'SEND_INVITE_EMAIL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'sendInviteEmail-queue',
          queueOptions: {
            durable: true,
          },
        },
      },
      {
        name: 'DELETE_COMPANY_EMAIL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'sendInviteEmail-queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
