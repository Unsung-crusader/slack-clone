import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import Header from './Header';
import ChatMessages from './ChatMessages';
import ChatInputBox from './ChatInputBox';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

type Props = {
  channelName: string;
};

function ChatBody(props: RouteComponentProps<{ channelName: string }>) {
  const {
    match: {
      params: { channelName },
    },
  } = props;

  useDocumentTitle(channelName);

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      <Header channelName={channelName} />
      <ChatMessages channelName={channelName} />
      <ChatInputBox channelName={channelName} />
    </div>
  );
}

export default withRouter(ChatBody);
