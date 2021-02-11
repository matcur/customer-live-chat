export interface IMessage {
  text: string
  author: IUser
  chatId: number
}

export interface IUser {
  name: string
  avatarPath: string
  role: 'customer' | 'consultant'
}