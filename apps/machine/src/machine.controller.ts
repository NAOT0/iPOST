import { Controller, Get } from '@nestjs/common';
import { MachineService } from './machine.service';

@Controller()
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Get()
  getHello(): string {
    return this.machineService.getHello();
  }
}
