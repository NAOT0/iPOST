import { Controller, Get, Param } from '@nestjs/common';
import { MobileService } from './mobile.service';
import { ImageMessagesService } from 'src/image-messages/image-messages.service';
import { ImageMessageDto } from 'src/types/message.dto';

@Controller('mobile')
export class MobileController {
  constructor(
    private readonly mobileService: MobileService,
    private readonly imageMessagesService: ImageMessagesService,
  ) {}

  @Get('messages')
  getMessages(): string[] {
    return this.mobileService.getMessages();
  }

  @Get('messages/:id')
  getMessageById(@Param('id') id: string): ImageMessageDto {
    return this.imageMessagesService.findById(id);
  }
}
