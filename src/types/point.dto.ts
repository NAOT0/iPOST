import * as admin from 'firebase-admin';

export class PointDto {
  /**
   * メッセージID
   */
  id: string;

  /**
   * 送信日時
   */
  sendsAt: Date;

  /**
   * ポイント残高
   */
  deposit: string;

  /**
   * 名前
   */
  name: string;

  public static createFromFirestoreData(
    id: string,
    data: admin.firestore.DocumentData,
  ): PointDto {
    const message = new PointDto();
    message.id = id;
    message.deposit = data.deposit;
    message.name = data.name;
    message.sendsAt = new Date(data.sendsAt.seconds * 1000);
    return message;
  }
}

export class CreatePointRequestDto {
  /**
   * メッセージ文
   */
  text: string;

  /**
   * 送信者ID
   */
  senderId: string;

  /**
   * 送信者名
   */
  senderName: string;
}
