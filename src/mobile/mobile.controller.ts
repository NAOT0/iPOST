import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MobileService } from './mobile.service';
import { ImageMessagesService } from 'src/image-messages/image-messages.service';
import { ImageMessageDto } from 'src/types/message.dto';
import {
  CreateTextMessageRequestDto,
  TextMessageDto,
} from 'src/types/text-message.dto';
import { TextMessagesService } from 'src/text-messages/text-messages.service';

@Controller('mobile')
export class MobileController {
  constructor(
    private readonly mobileService: MobileService,
    private readonly textMessagesService: TextMessagesService,
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

  @Post('messages')
  async createMessage(
    @Body() dto: CreateTextMessageRequestDto,
  ): Promise<TextMessageDto> {
    return await this.textMessagesService.create(dto);
  }
}
