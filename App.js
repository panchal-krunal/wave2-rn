import React, {useEffect} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
const {store, persistor} = configureStore();

const App = () => {
  const initializeSocket = () => {
    const ws = new WebSocket('wss://app2.fisdom.com:4515');

    ws.onopen = () => {
      console.log('socket opened');
      // connection opened
      ws.send(
        '63=FT3.0|64=101|65=74|66=14:59:22|67=TEST|68=YOUR_API_KEY|4=|400=0|401=2|396=HO|51=4|395=127.0.0.1',
      ); // send a message
    };

    ws.onmessage = e => {
      // a message was received
      console.log(e.data);
    };

    ws.onerror = e => {
      // an error occurred
      console.log(e.message);
    };
  };
  useEffect(() => {
    initializeSocket();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar />
          <Navigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
export default App;
