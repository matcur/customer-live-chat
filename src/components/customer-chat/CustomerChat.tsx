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
  customer: IUser
}

export const CustomerChat = (props: IProps) => {
  const [messages, setMessages] = useState(getMessagesByChatId(props.chatId))
  const [needShowChat, setNeedShowChat] = useState(false)

  const addNewMessage = (text: string) => {
    const newMessage = {
      text,
      author: props.customer,
      chatId: props.chatId,
    }
    setMessages([...messages, newMessage])

    props.onMessageAdded(newMessage)
  }
  const showChat = () => setNeedShowChat(true)
  const addHelloMessage = () => 
    setMessages([{
      text: props.helloMessageText?? 'Hi',
      author: props.consultant,
      chatId: props.chatId,
    }])

  if (messages.length === 0 && props.helloMessageText !== undefined)
    addHelloMessage()  

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