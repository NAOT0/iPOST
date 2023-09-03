/**
 * iPOST本体から送信されるメッセージを表すクラス
 * メッセージ本文は画像に含まれる
 */
export class ImageMessageDto {
    /**
     * メッセージID
     */
    id: string

    /**
     * 送信日時
     */
    sendsAt: Date

    /**
     * メッセージ画像URL
     */
    imageUrl: string

    /**
     * 送信者ID
     */
    senderId: string

    /**
     * 送信者名
     */
    senderName: string
}