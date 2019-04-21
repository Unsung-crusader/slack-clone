import * as React from 'react';

import { useAuth } from './hooks';
import { LoginScreen, ChannelScreen } from './screens';

export default function App() {
  const user = useAuth();

  return user.id ? <ChannelScreen /> : <LoginScreen />;
}
