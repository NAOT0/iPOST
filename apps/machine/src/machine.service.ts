import { Injectable } from '@nestjs/common';

@Injectable()
export class MachineService {
  getHello(): string {
    return 'Hello World!';
  }
}
