import React from 'react';

import SideBar from './SideBar';
import ChatBody from './ChatBody';

export default function ChannelScreen() {
  return (
    <div className="font-sans antialiased h-screen flex">
      <SideBar />
      <ChatBody />
    </div>
  );
}
