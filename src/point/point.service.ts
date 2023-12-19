import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { PointDto, CreatePointRequestDto } from 'src/types/point.dto';

@Injectable()
export class PointService {
  constructor() {}
  // idを見つけてポイント残高を確認
  async findById(id: string): Promise<PointDto> {
    const firestore = admin.firestore();
    const collectionRef = firestore.collection('Point');
    const documentRef = collectionRef.doc(id);
    const document = await documentRef.get();
    if (!document.exists) {
      console.log(`テキストメッセージ [${id}] が見つかりません`);
      return null;
    }
    const data = document.data();
    const message = PointDto.createFromFirestoreData(id, data);
    return message;
  }
}
