import React from 'react';

import Header from './Header';
import ChatMessages from './ChatMessages';
import ChatInputBox from './ChatInputBox';

type Props = {
  channelName: string;
};

export default function ChatBody() {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      <Header />
      <ChatMessages />
      <ChatInputBox />
    </div>
  );
}
