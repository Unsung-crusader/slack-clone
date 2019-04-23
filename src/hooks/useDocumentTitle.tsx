import React from 'react';

export default function useDocumentTitle(title: string): null {
  React.useEffect(() => {
    document.title = `${title} | Slack Clone`;
  }, [title]);

  return null;
}
