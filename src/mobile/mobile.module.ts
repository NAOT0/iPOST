import { Module } from '@nestjs/common';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';
import { ImageMessagesModule } from 'src/image-messages/image-messages.module';

@Module({
    controllers: [MobileController],
    providers: [MobileService],
    imports: [ImageMessagesModule]
})
export class MobileModule { }
