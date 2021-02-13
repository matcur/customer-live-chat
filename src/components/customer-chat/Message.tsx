import { IMessage } from "../../model"

interface IProps {
  message: IMessage
}

export const Message = (props: IProps) => {
  const message = props.message

  const classes = ['customer-chat__message']
  if (message.author.role == 'customer')
    classes.push('customer-chat__right-message')

  return (
    <div className={classes.join(' ')}>
      <img src={message.author.avatarPath} alt="" className="customer-chat__user-avatar"/>
      <div className="customer-chat__message-text">{message.text}</div>
    </div>
  )
}