import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from '@navigation/index';
import store from '@store/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
