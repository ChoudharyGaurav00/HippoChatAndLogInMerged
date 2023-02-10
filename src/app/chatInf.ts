import { messageInterface } from "./msgInterface"
export interface chatInterface {
    key: number
    username: string
    messageArr: messageInterface[]
}
