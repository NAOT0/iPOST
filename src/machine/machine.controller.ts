import { Controller, Get, Param } from '@nestjs/common';
import { MachineService } from './machine.service';
import { TextMessagesService } from 'src/text-messages/text-messages.service';
import { TextMessageDto } from 'src/types/text-message.dto';

@Controller('machine')
export class MachineController {
  constructor(
    private readonly textMessagesService: TextMessagesService,
    private readonly machineService: MachineService,
  ) {}

  @Get('messages/')
  getMessages(): string {
    return this.machineService.getMessages();
  }

  @Get('messages/:id')
  getMessagesById(@Param('id') id: string): TextMessageDto {
    return this.textMessagesService.findById(id);
  }
}
