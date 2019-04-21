import React from 'react';

import OnlineStatus from './OnlineStatus ';
import ChannelLists from './ChannelLists';
import DirectMessages from './DirectMessages';

export default function SideBar() {
  return (
    <div
      style={{ backgroundColor: '#3f0e40' }}
      className="text-purple-lighter flex-none w-64 pb-6 hidden md:block"
    >
      <OnlineStatus />
      <ChannelLists />
      <DirectMessages />
    </div>
  );
}
