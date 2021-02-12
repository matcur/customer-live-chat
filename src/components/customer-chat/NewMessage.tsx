import React from "react"

interface IProps {
  onNewMessageChange: (text: string) => void
  onMessageSubmit: (text: string) => void
}

interface IState {
  data: InputData
  dataState: InputDataState,
  validDataState: {
    isTextValid: boolean
  }
}

interface InputDataState {
  isTextValid: boolean
}

interface InputData {
  text: string
}

export class NewMessage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    const validDataState: InputDataState = {
      isTextValid: true
    }

    this.state = {
      data: {
        text: ''
      },
      dataState: {...validDataState},
      validDataState: validDataState,
    }
  }

  updateData<S extends keyof InputData>(key: S, value: InputData[S]) {
    this.setState(state => ({
      data: {
        ...state.data,
        [key]: value,
      }
    }))
  }

  onTextChange(text: string) {
    this.updateData('text', text)
    this.props.onNewMessageChange(text)
  }

  onMessageSubmit(text: string) {
    if (!this.isValidData(this.state.data)) {
      this.showInputErrors()
      return
    }

    this.clearErrors()
    this.props.onMessageSubmit(text)
    this.updateData('text', '')
  }

  isValidData(data: InputData) {
    return data.text !== ''
  }

  showInputErrors = () => {
    const dataState = {...this.state.validDataState}
    const data = this.state.data
    if (data.text === '')
      dataState.isTextValid = false

    this.setState({
      dataState: dataState,
    })
  }

  clearErrors() {
    this.setState(state => ({
      dataState: state.validDataState
    }))
  }

  render() {
    const state = this.state
    const data = this.state.data

    return (
      <div className="customer-chat__new-message">
        <div className="customer-chat__message-text customer-chat__input">
          <input 
            value={data.text}
            onChange={(e) => this.onTextChange(e.target.value)}
            className="customer-chat__message-input"/>
          <span className="customer-chat__alert">{state.dataState.isTextValid? '': 'must be filled'}</span>
        </div>
        <button 
          onClick={(e) => this.onMessageSubmit(data.text)}
          type="submit"
          className="customer-chat__send-btn">Отправить</button>
      </div>
    )
  }
}