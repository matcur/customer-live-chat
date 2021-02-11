import { IMessage } from "../../model"

interface IProps {
  message: IMessage
}

export const Message = (props: IProps) => {
  const message = props.message

  return (
    <div className="customer-chat__message">
      <img src={message.author.avatarPath} alt="" className="customer-chat__user-avatar"/>
      <div className="customer-chat__message-text">{message.text}</div>
    </div>
  )
}