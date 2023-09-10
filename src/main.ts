import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cert, initializeApp } from 'firebase-admin/app';

function initializeFirebase() {
  initializeApp({
    credential: cert('config/ipost-firebase-credentials.json'),
  });
}

async function bootstrap() {
  initializeFirebase();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
