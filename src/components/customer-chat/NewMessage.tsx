import { strict } from "assert"
import { useState } from "react"
import { IUser } from "../../model"

interface IProps {
  onNewMessageChange: (text: string) => void
  onMessageSubmit: (text: string) => void
}

export const NewMessage = (props: IProps) => {
  const validDataState = {
    isTextValid: true
  }
  const [text, setText] = useState('')
  const [dataState, setDataState] = useState(validDataState)

  const onTextChange = (text: string) => {
    setText(text)
    props.onNewMessageChange(text)
  }
  const onMessageSubmit = (text: string) => {
    if (!isValidData()) {
      showInputErrors()
      return
    }

    clearErrors()
    props.onMessageSubmit(text)
    setText('')
  }

  const isValidData = () => {
    return text != ''
  }
  const showInputErrors = () => {
    const dataState = {...validDataState}
    if (text == '')
      dataState.isTextValid = false

    setDataState(dataState)
  }
  const clearErrors = () => setDataState(validDataState)

  return (
    <div className="customer-chat__new-message">
      <div className="customer-chat__message-text customer-chat__input">
        <input 
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          className="customer-chat__message-input"/>
        <span className="customer-chat__alert">{dataState.isTextValid? '': 'must be filled'}</span>
      </div>
      <button 
        onClick={(e) => onMessageSubmit(text)}
        type="submit"
        className="customer-chat__send-btn">Отправить</button>
    </div>
  )
}