import { Controller, Get, Param } from '@nestjs/common';
import { PointService } from 'src/point/point.service';
import { PointDto } from 'src/types/point.dto';
import { NotFoundException } from '@nestjs/common';
@Controller('store')
export class StoreController {
  constructor(private readonly pointService: PointService) {}

  @Get('deposit/:id')
  async getMessagesById(@Param('id') id: string): Promise<PointDto> {
    const message = await this.pointService.findById(id);
    if (!message) {
      throw new NotFoundException(
        `テキストメッセージ [${id}] が見つかりません`,
      );
    }
    return message;
  }
}
