import { Injectable } from '@nestjs/common';

@Injectable()
export class MobileService {
    getMessages(): string[] {
        return ["おはよう", "こんにちわ", "こんばんわ"]
    }

}

