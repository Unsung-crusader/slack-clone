import * as React from 'react';

import { useChannel, useAuth } from './hooks';
import { LoginScreen, ChannelScreen } from './screens';

export default function App() {
  const channels = useChannel('channels');
  const user = useAuth();

  return user.id ? <ChannelScreen /> : <LoginScreen />;
}
