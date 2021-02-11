import { IMessage, IUser } from "../model"

export function getMessagesByChatId(chatId: number) {
  const user1: IUser = {
    name: 'my name',
    avatarPath: '/cats/index-1.jpg',
    role: 'consultant',
  }
  const user2: IUser = {
    name: 'my name',
    avatarPath: '/cats/index-1.jpg',
    role: 'customer',
  }

  const messages: IMessage[] = [
    {
      text: 'safesaf',
      author: user1,
      chatId: chatId,
    },
    {
      text: 'safesaf seff',
      author: user1,
      chatId: chatId,
    },
    {
      text: 'safesaf safefsafesaf safefsafesaf safefsafesaf safefsafesaf safefsafesaf safefsafesaf safef',
      author: user2,
      chatId: chatId,
    },
  ]

  return messages
}