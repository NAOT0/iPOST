import { Injectable } from '@nestjs/common';
import { ImageMessageDto } from 'src/types/message.dto';

@Injectable()
export class ImageMessagesService {
  findById(id: string): ImageMessageDto {
    const dto = new ImageMessageDto();
    dto.id = id;
    dto.sendsAt = new Date();
    dto.imageUrl = 'http://hello';
    dto.senderId = '9999';
    dto.senderName = 'nanami';

    return dto;
  }
}
