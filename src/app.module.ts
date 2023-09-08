import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MobileModule } from './mobile/mobile.module';
import { ImageMessagesModule } from './image-messages/image-messages.module';
import { MachineModule } from './machine/machine.module';
import { TextMessagesModule } from './text-messages/text-messages.module';

@Module({
  imports: [MobileModule, ImageMessagesModule, MachineModule, TextMessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
