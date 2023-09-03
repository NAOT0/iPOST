import { Controller, Get, Param } from '@nestjs/common';
import { MobileService } from './mobile.service';

@Controller('mobile')
export class MobileController {
    constructor(private readonly mobileService: MobileService) { }

    @Get("messages")
    getMessages(): string[] {
        return this.mobileService.getMessages();
    }

    @Get("messages/:id")
    getMessageById(@Param("id") id: string): string {
        return `This action returns a #${id} message`;
    }

}
