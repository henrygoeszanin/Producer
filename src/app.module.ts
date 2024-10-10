import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { CompaniesModule } from './companies RDStation/companies.module';

@Module({
  imports: [OrdersModule, UsersModule, EmailModule, CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
