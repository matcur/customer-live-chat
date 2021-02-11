import { IMessage, IUser } from "../../model"
import { Message } from "./Message"

interface IProps {
  messages?: IMessage[]
  chatId: number
}

export const MessageList = (props: IProps) => {

  return (
    <div className="customer-chat__messages">
      {props.messages?.map(m => <Message message={m} />)}
    </div>
  )
}