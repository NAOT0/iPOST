import { Injectable } from '@nestjs/common';
import {
  CreateTextMessageRequestDto,
  TextMessageDto,
} from 'src/types/text-message.dto';
// import { FirebaseAdmin } from 'firebase-admin';
import * as admin from 'firebase-admin';

@Injectable()
export class TextMessagesService {
  constructor() {} // @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,

  findById(id: string): TextMessageDto {
    const dto = new TextMessageDto();
    dto.id = id;
    dto.sendsAt = new Date();
    dto.text = 'スマホから送ってます';
    dto.senderId = '9999';
    dto.senderName = 'nanami';

    return dto;
  }

  async create(dto: CreateTextMessageRequestDto) {
    const firestore = admin.firestore();
    const collectionRef = firestore.collection('TextMessages');
    const documentRef = await collectionRef.add({
      ...dto,
      sendsAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    const data = (await documentRef.get()).data();
    const message = new TextMessageDto();
    message.id = documentRef.id;
    message.text = data.text;
    message.senderId = data.senderId;
    message.senderName = data.senderName;
    message.sendsAt = new Date(data.sendsAt.seconds * 1000);
    return message;
  }
}
