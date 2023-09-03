import { Test, TestingModule } from '@nestjs/testing';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';

describe('MachineController', () => {
  let machineController: MachineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MachineController],
      providers: [MachineService],
    }).compile();

    machineController = app.get<MachineController>(MachineController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(machineController.getHello()).toBe('Hello World!');
    });
  });
});
