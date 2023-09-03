import { NestFactory } from '@nestjs/core';
import { MachineModule } from './machine.module';

async function bootstrap() {
  const app = await NestFactory.create(MachineModule);
  await app.listen(3000);
}
bootstrap();
