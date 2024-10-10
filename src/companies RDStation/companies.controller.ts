import { Body, Controller, Post } from '@nestjs/common';
import { CompanieService } from './companies.service';
import { TypeNewCompanyDto } from './dto/new-company-dto';

@Controller('company')
export class CompaniesController {
  constructor(private readonly companieService: CompanieService) {}

  @Post()
  newCompany(@Body() NewCompanyDto: TypeNewCompanyDto) {
    return this.companieService.placeNewCompany(NewCompanyDto);
  }
}
