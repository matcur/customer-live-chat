import { useEffect, useRef } from "react"
import { IMessage } from "../../model"
import { Message } from "./Message"

interface IProps {
  messages?: IMessage[]
  chatId: number
}

export const MessageList = (props: IProps) => {
  const messagesBlockRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => scrollBottom())

  const scrollBottom = () => {
    const element = messagesBlockRef.current
    element?.scrollTo({top: element.clientHeight, behavior: 'smooth'})
  }

  return (
    <div className="customer-chat__messages" ref={messagesBlockRef}>
      {props.messages?.map(m => <Message message={m} />)}
    </div>
  )
}