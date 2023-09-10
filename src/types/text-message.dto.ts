/**
 * スマホから送信されたメッセージを表すクラス
 * メッセージ本文はテキストである
 */
export class TextMessageDto {
  /**
   * メッセージID
   */
  id: string;

  /**
   * 送信日時
   */
  sendsAt: Date;

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

export class CreateTextMessageRequestDto {
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
