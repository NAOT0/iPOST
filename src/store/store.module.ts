import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { PointModule } from 'src/point/point.module';
@Module({
  controllers: [StoreController],
  providers: [StoreService],
  imports: [PointModule],
})
export class StoreModule {}
