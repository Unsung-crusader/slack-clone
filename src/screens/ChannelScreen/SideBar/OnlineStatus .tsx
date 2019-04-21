import React from 'react';

import { useAuth } from '../../../hooks';

export default function OnlineStatus() {
  const user = useAuth();
  return (
    <div className="text-white mb-2 mt-3 px-4 flex justify-between">
      <div className="flex-auto">
        <div className="flex items-center mb-6">
          <svg
            className="h-2 w-2 fill-current text-green mr-2"
            viewBox="0 0 20 20"
          >
            <circle cx={10} cy={10} r={10} />
          </svg>
          <span className="text-white opacity-50 text-sm">{user.name}</span>
        </div>
      </div>
      <div>
        <svg
          className="h-6 w-6 fill-current text-white opacity-25"
          viewBox="0 0 20 20"
        >
          <path
            d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
