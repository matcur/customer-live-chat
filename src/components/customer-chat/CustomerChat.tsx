import React from "react"
import { useState } from "react"
import { getMessagesByChatId } from "../../api/getMessagesByChatId"
import { IMessage, IUser } from "../../model"
import { Header } from "./Header"
import { MessageList } from "./MessageList"
import { NewMessage } from "./NewMessage"

interface IProps {
  onMessageAdded: (messag: IMessage) => void
  chatId: number
  helloMessageText?: string
  consultant: IUser
}

export const CustomerChat = (props: IProps) => {
  const [messages, setMessages] = useState(getMessagesByChatId(props.chatId))
  const [needShowChat, setNeedShowChat] = useState(false)

  const addNewMessage = (text: string) => {
    const newMessage = {
      text,
      author: messages[1].author,
      chatId: props.chatId,
    }
    setMessages([...messages, newMessage])
  }
  const showChat = () => setNeedShowChat(true)

  if (messages.length === 0 && props.helloMessageText !== undefined)
    setMessages([{
      text: props.helloMessageText,
      author: props.consultant,
      chatId: props.chatId,
    }])
  
  return (
    <div className="customer-chat-wrapper">
      {
        needShowChat?
        <div className="customer-chat">
          <Header/>
          <MessageList
            messages={messages}
            chatId={props.chatId}/>
          <NewMessage
            onNewMessageChange={() => {}}
            onMessageSubmit={v => addNewMessage(v)}/>
        </div>
        :
        <div 
          className="customer-chat-opener"
          onClick={(e) => showChat()}></div>
      }
    </div>
  )
}