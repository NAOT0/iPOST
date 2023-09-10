import { Controller, Get, Param } from '@nestjs/common';
import { MachineService } from './machine.service';
import { TextMessagesService } from 'src/text-messages/text-messages.service';
import { TextMessageDto } from 'src/types/text-message.dto';
import { NotFoundException } from '@nestjs/common';

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
  async getMessagesById(@Param('id') id: string): Promise<TextMessageDto> {
    const message = await this.textMessagesService.findById(id);
    if (!message) {
      throw new NotFoundException(
        `テキストメッセージ [${id}] が見つかりません`,
      );
    }
    return message;
  }
}
