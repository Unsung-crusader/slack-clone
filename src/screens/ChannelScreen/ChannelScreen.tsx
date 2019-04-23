import React from 'react';
import { Router, Redirect } from '@reach/router';

import SideBar from './SideBar';
import ChatBody from './ChatBody';

export default function ChannelScreen() {
  return (
    <div className="font-sans antialiased h-screen flex">
      <SideBar />
      <Router>
        <ChatBody path="channel/:channelName" />
        <Redirect from="/" to="channels/general" />
      </Router>
    </div>
  );
}
