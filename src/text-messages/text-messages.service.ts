import { Injectable } from '@nestjs/common';
import { TextMessageDto } from 'src/types/text-message.dto';

@Injectable()
export class TextMessagesService {
  findById(id: string): TextMessageDto {
    const dto = new TextMessageDto();
    dto.id = id;
    dto.sendsAt = new Date();
    dto.text = 'スマホから送ってます';
    dto.senderId = '9999';
    dto.senderName = 'nanami';

    return dto;
  }
}
