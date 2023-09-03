import { Controller, Get } from '@nestjs/common';
import { MobileService } from './mobile.service';

@Controller('mobile')
export class MobileController {
    constructor(private readonly mobileService: MobileService){}

    @Get("messages")
    getMessages(): string[]{
        return this.mobileService.getMessages();
    }

    @Get("id")
    getId(): string{
        return this.mobileService.getId();
    }
    

}
