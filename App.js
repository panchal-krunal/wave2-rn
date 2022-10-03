import React, {useEffect} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
const {store, persistor} = configureStore();


const App = () => {
  // const initializeSocket = () => {
  //   const ws = new WebSocket('wss://app2.fisdom.com:4515');
  //   function SendMessageOnSocket(msg) {
  //     try {
  //       if (ws.readyState == 1) {
  //         ws.send(fragmentData(msg));
  //       }
  //     } catch (ex) {}
  //   }
  //   function fragmentData(_requestPacket) {
  //     try {
  //       var _strHead = (_strHead = String.fromCharCode("5")); //5 comprression char
    
  //       var i;
  //       var _data = new ArrayBuffer(_strHead.length);
  //       var _headerBytes = new Uint8Array(_data);
    
  //       for (i = 0; i < _strHead.length; i += 1) {
  //         _headerBytes[i] = _strHead.charCodeAt(i);
  //       }
  //       var _baRequest;
  //       _baRequest = HandleCompressedData(_requestPacket);
    
  //       var _length = _baRequest.length + 4;
    
  //       var _lenLength = _length.toString().length;
  //       var _lengthString = "";
    
  //       for (i = 0; i < 5 - _lenLength; i++) {
  //         _lengthString += "0";
  //       }
    
  //       _lengthString += _length.toString();
    
  //       _data = new ArrayBuffer(_lengthString.length);
  //       var _lenBytes = new Uint8Array(_data);
    
  //       for (i = 0; i < _lengthString.length; i += 1) {
  //         _lenBytes[i] = _lengthString.charCodeAt(i);
  //       }
    
  //       var _baActualSend = new Uint8Array(5 + _length);
  //       _baActualSend.set(_lenBytes);
  //       _baActualSend.set(_baRequest, 5);
    
  //       var _outputStream = new Uint8Array(
  //         _headerBytes.length + _baActualSend.length
  //       );
  //       _outputStream.set(_headerBytes);
  //       _outputStream.set(_baActualSend, 1);
  //       return _outputStream.buffer;
  //     } catch (e) {}
  //   }
  
  //   function HandleCompressedData(_rawData) {
  //     try {
  //       var _data = new ArrayBuffer(_rawData.length);
  //       var _uint8buf = new Uint8Array(_data);
  //       for (var i = 0; i < _rawData.length; i += 1) {
  //         _uint8buf[i] = _rawData.charCodeAt(i) & 0xff;
  //       }
    
  //       var _compData = Zlib.compress(new Uint8Array(_data), 6);
    
  //       return _compData;
  //     } catch (e) {}
  //   }

  //   ws.onopen = () => {
  //     console.log('socket opened');
  //     SendMessageOnSocket((sLoginRequest));
  //     // connection opened
  //     ws.send(
  //       '63=FT3.0|64=101|65=74|66=14:59:22|67=TEST|68=YOUR_API_KEY|4=|400=0|401=2|396=HO|51=4|395=127.0.0.1',
  //     ); // send a message
  //   };

  //   ws.onmessage = e => {
  //     // a message was received
  //     console.log(e.data);
  //   };

  //   ws.onerror = e => {
  //     // an error occurred
  //     console.log(e.message);
  //   };
  // };
  useEffect(() => {
    // initializeSocket();
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
