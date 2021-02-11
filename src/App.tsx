import React from 'react';
import { CustomerChat } from './components/customer-chat/CustomerChat';

function App() {
  return (
    <div className="app">
      <CustomerChat onMessageAdded={(m) => {}} chatId={1}/>
    </div>
  );
}

export default App;
