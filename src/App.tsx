import React from 'react';
import { CustomerChat } from './components/customer-chat/CustomerChat';
import { IUser } from './model';

function App() {
  const consultant: IUser = {
    name: 'Vasi',
    avatarPath: '/cats/index-1.jpg',
    role: 'consultant'
  }

  const currentUser: IUser = {
    name: 'Pety',
    avatarPath: '/cats/index.jpg',
    role: 'consultant'
  }

  return (
    <div className="app">
      <CustomerChat
       onMessageAdded={(m) => {}}
       chatId={1}
       helloMessageText="Hi it's me"
       consultant={consultant}
       customer={currentUser}/>
    </div>
  );
}

export default App;
