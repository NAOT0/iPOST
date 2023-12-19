import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { PointDto } from 'src/types/point.dto';
@Injectable()
export class PointService {
  constructor() {}

  async findById(id: string): Promise<PointDto> {
    const firestore = admin.firestore();
    const collectionRef = firestore.collection('ImageMessages');
    const documentRef = collectionRef.doc(id);
    const document = await documentRef.get();
  }
}
