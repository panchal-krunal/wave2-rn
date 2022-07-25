import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
const {store, persistor} = configureStore();

const App = () => {
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
