import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { TypeConfirmationCode } from './dto/confirmationCodeDto';
import { TypeSendInviteEmailDto } from './dto/sendInviteEmailDto';
import { TypeSendDeleteCompanyEmailDto } from './dto/deleteCompanyDto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('confirmationCode')
  async sendConfirmationCodeDto(
    @Body() ConfirmationCode: TypeConfirmationCode,
  ) {
    return await this.emailService.placeConfirmationCodeEmail(ConfirmationCode);
  }

  @Post('invite')
  async sendInviteEmail(@Body() sendMail: TypeSendInviteEmailDto) {
    return await this.emailService.placeInviteEmail(sendMail);
  }

  @Post('deleteCompany')
  async deleteCompany(@Body() deleteCompany: TypeSendDeleteCompanyEmailDto) {
    return await this.emailService.placeDeleteCompany(deleteCompany);
  }
}
