import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';

import SideBar from './SideBar';
import ChatBody from './ChatBody';

export default function ChannelScreen() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased h-screen flex">
        <Route
          path="/channel/:channelName"
          render={() => (
            <>
              <SideBar />
              <ChatBody />
            </>
          )}
        />
        <CustomRedirect from="/" to="channel/general" />
      </div>
    </BrowserRouter>
  );
}

type Props = RouteComponentProps & {
  from: string;
  to: string;
};

const CustomRedirect = withRouter((props: Props) => {
  React.useEffect(() => {
    const { location, history, from, to } = props;

    if (location.pathname === from) {
      history.push(to);
    }
  }, []);

  return null;
});
