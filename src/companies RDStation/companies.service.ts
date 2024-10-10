import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TypeNewCompanyDto } from './dto/new-company-dto';

@Injectable()
export class CompanieService {
  constructor(
    @Inject('NEW_COMPANY_RDSTATION_SERVICE') private rabbitClient: ClientProxy,
  ) {}

  placeNewCompany(newCompany: TypeNewCompanyDto) {
    this.rabbitClient.emit('newCompanyRDStation-queue', newCompany);
    return { message: 'new Compay placed' };
  }
}
