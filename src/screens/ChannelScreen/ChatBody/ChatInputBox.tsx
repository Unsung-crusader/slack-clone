import React from 'react';

import { db } from '../../../firebase';
import { useAuth } from '../../../hooks';

export default function ChatInputBox(props: { channelName: string }) {
  const user = useAuth();
  const chatInputRef: React.RefObject<HTMLInputElement> = React.createRef();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const chatInputElem = chatInputRef.current;

    if (chatInputElem) {
      db.collection(`channels/${props.channelName}/messages`).add({
        text: chatInputElem.value.trim(),
        createdAt: new Date(),
        user: db.collection('users').doc(user.id),
      });
    }

    form.reset();
  };

  return (
    <form className="pb-6 px-4 flex-none" onSubmit={handleSubmit}>
      <div className="flex rounded-lg border-2 border-grey overflow-hidden">
        <PlusIcon />
        <input
          ref={chatInputRef}
          name="chat-input-box"
          type="text"
          className="w-full px-4"
          placeholder={`Message ${props.channelName}`}
        />
      </div>
    </form>
  );
}

const PlusIcon = () => (
  <span className="text-3xl text-grey border-r-2 border-grey p-2">
    <svg
      className="fill-current h-6 w-6 block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
    </svg>
  </span>
);
