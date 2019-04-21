import * as React from 'react';
import { format } from 'date-fns';
import { Timestamp, CollectionReference } from '@firebase/firestore-types';

import { useCollection, useDoc } from '../../../hooks';

type MessageType = {
  id: string;
  text: string;
  createdAt: Timestamp;
  user: CollectionReference;
};

export default function ChatMessages() {
  const messages: MessageType[] | null = useCollection(
    `channels/cricket/messages`,
    `createdAt`
  );

  return (
    <div className="px-6 py-4 flex-1 overflow-y-scroll">
      {messages &&
        messages.map((message: MessageType) => <Message message={message} />)}
    </div>
  );
}

type MessageProps = {
  message: MessageType;
};

type Author = {
  email: string;
  id: string;
  name: string;
  photo: string;
};

function Message(props: MessageProps) {
  const { message } = props;
  const { id, createdAt, text, user } = message;
  const author = useDoc(user.path);

  return (
    <div className="flex items-start mb-4 text-sm" key={id}>
      {author && (
        <img
          className="w-10 h-10 rounded mr-3"
          style={{
            backgroundImage: `url(${author.photo})`,
            backgroundSize: 'cover',
            borderRadius: 3,
          }}
        />
      )}
      <div className="flex-1 overflow-hidden">
        <div>
          <span className="font-bold">{author && author.name} </span>
          <span className="text-grey text-xs">
            {format(createdAt.toDate(), 'HH:mm A')}
          </span>
        </div>
        <p className="text-black leading-normal">{text}</p>
      </div>
    </div>
  );
}
