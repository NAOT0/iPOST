import { Injectable } from '@nestjs/common';
import {
  CreateImageMessagesRequestDto,
  ImageMessageDto,
} from 'src/types/message.dto';
import * as admin from 'firebase-admin';

@Injectable()
export class ImageMessagesService {
  constructor() {}

  async findById(id: string): Promise<ImageMessageDto> {
    const firestore = admin.firestore();
    const collectionRef = firestore.collection('ImageMessages');
    const documentRef = collectionRef.doc(id);
    const document = await documentRef.get();
    if (!document.exists) {
      console.log(`テキストメッセージ [${id}] が見つかりません`);
      return null;
    }
    const data = document.data();
    const message = ImageMessageDto.createFromFirestoreData(id, data);
    return message;
  }

  async create(dto: CreateImageMessagesRequestDto): Promise<ImageMessageDto> {
    const firestore = admin.firestore();
    const collectionRef = firestore.collection('ImageMessages');
    const documentRef = await collectionRef.add({
      ...dto,
      sendsAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    const data = (await documentRef.get()).data();
    const message = ImageMessageDto.createFromFirestoreData(
      documentRef.id,
      data,
    );
    return message;
  }

  async findAllId(): Promise<string[]> {
    const allMessages = [];
    // <やるべきこと>
    // ここのIDを時間順（更新順に並び変える）
    const db = admin.firestore();
    const idRef = db.collection('ImageMessages');
    const snapshot = await idRef.get();
    snapshot.forEach((doc) => {
      doc.id, '=>', doc.data();
    });
    const id = snapshot.docs.map((doc) => doc.id);
    return id;
  }
}
