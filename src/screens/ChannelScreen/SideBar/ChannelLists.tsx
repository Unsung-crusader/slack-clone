import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';

import { useCollection } from '../../../hooks';

type doc = {
  id: string;
  type: string;
};

function ChannelLists(props: RouteComponentProps<{ channelName: string }>) {
  const channels = useCollection('channels');

  if (!channels) return null;

  return (
    <div className="mb-8">
      <div className="px-4 mb-2 text-white flex justify-between items-center">
        <div className="opacity-75">Channels</div>
        <div>
          <svg
            className="fill-current h-4 w-4 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          </svg>
        </div>
      </div>
      {channels.map((channel: doc) => {
        const { id } = channel;

        const isActive = props.match.params.channelName === id;

        const backgroundColor = isActive ? '#1164A3' : '';
        const color = isActive ? '#FFFFFF' : '#C5B7C6';

        return (
          <div style={{ backgroundColor }} className="py-1 px-4" key={id}>
            <Link style={{ color }} to={`/channel/${channel.id}`}>
              # {channel.id}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default withRouter(ChannelLists);
