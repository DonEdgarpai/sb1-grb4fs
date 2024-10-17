import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';
import { NfcManager } from 'nativescript-nfc';

// Controls react-nativescript log verbosity.
Object.defineProperty(global, '__DEV__', { value: false });

// Initialize NFC Manager
NfcManager.init();

ReactNativeScript.start(React.createElement(MainStack, {}, null));