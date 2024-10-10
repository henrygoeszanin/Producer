import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CompaniesController } from './companies.controller';
import { CompanieService } from './companies.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NEW_COMPANY_RDSTATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'newCompanyRDStation-queue',
        },
      },
    ]),
  ],
  controllers: [CompaniesController],
  providers: [CompanieService],
})
export class CompaniesModule {}
