import React from 'react';
import { CustomerChat } from './components/customer-chat/CustomerChat';

function App() {
  return (
    <div className="app">
      <CustomerChat
       onMessageAdded={(m) => {}}
       chatId={1}
       helloMessageText="Hi it's me"
       consultant={{
         name: 'Vasi',
         avatarPath: '/cats/index-1.jpg',
         role: 'consultant'
       }}/>
    </div>
  );
}

export default App;
