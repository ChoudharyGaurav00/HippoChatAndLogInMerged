export interface messageInterface {
    time: Date;
    content: string;
    senderType: sendertypeEnum;
}
enum sendertypeEnum {
    customer = 0,
    sender = 1
}