import { Injectable } from '@nestjs/common';
import {
  CreateTextMessageRequestDto,
  TextMessageDto,
} from 'src/types/text-message.dto';
import * as admin from 'firebase-admin';

@Injectable()
export class TextMessagesService {
  constructor() {}

  async findById(id: string): Promise<TextMessageDto> {
    const firestore = admin.firestore();
    const collectionRef = firestore.collection('TextMessages');
    const documentRef = collectionRef.doc(id);
    const document = await documentRef.get();
    if (!document.exists) {
      console.log(`テキストメッセージ [${id}] が見つかりません`);
      return null;
    }

    const data = document.data();
    const message = TextMessageDto.createFromFirestoreData(id, data);
    return message;
  }

  async create(dto: CreateTextMessageRequestDto): Promise<TextMessageDto> {
    const firestore = admin.firestore();
    const collectionRef = firestore.collection('TextMessages');
    const documentRef = await collectionRef.add({
      ...dto,
      sendsAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    const data = (await documentRef.get()).data();
    const message = TextMessageDto.createFromFirestoreData(
      documentRef.id,
      data,
    );
    return message;
  }

  async findAllId(): Promise<string[]> {
    const allMessages = [];
    const id = [];

    const db = admin.firestore();
    const idRef = db.collection('TextMessages');
    const snapshot = await idRef.get();
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
    id.push(console.log(snapshot.docs.map((doc) => doc.id)));
    allMessages.push(snapshot);
    return id;
  }
}
