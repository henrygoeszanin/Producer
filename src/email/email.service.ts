import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TypeConfirmationCode } from './dto/confirmationCodeDto';
import { TypeSendInviteEmailDto } from './dto/sendInviteEmailDto';
import { TypeSendDeleteCompanyEmailDto } from './dto/deleteCompanyDto';

@Injectable()
export class EmailService {
  constructor(
    @Inject('CONFIRMATION_CODE_SERVICE')
    private raabitConfirmationCodeClient: ClientProxy,
    @Inject('SEND_INVITE_EMAIL_SERVICE')
    private rabbitInviteMailClient: ClientProxy,
  ) {}

  async placeConfirmationCodeEmail(ConfirmationCode: TypeConfirmationCode) {
    this.raabitConfirmationCodeClient.emit(
      'confirmationCode-queue',
      ConfirmationCode,
    );

    return { message: 'ConfirmationCode Placed' };
  }

  async placeInviteEmail(sendInviteMail: TypeSendInviteEmailDto) {
    this.rabbitInviteMailClient.emit('sendInviteEmail-queue', sendInviteMail);
    return { message: 'Invite mail Placed' };
  }

  async placeDeleteCompany(deleteCompany: TypeSendDeleteCompanyEmailDto) {
    this.rabbitInviteMailClient.emit(
      'deleteCompanyRequestInvitation-queue',
      deleteCompany,
    );
    return { message: 'DeleteCompany mail Placed' };
  }
}
