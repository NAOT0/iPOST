import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { TextMessagesModule } from 'src/text-messages/text-messages.module';

@Module({
  providers: [MachineService],
  controllers: [MachineController],
  imports: [TextMessagesModule],
})
export class MachineModule {}
