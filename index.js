/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

const ignoredWarnings: string[] = ['Expected style', 'Unknown data'];

function isWarnIgnored(...args: any[]) {
  return args.some((arg) => {
    if (typeof arg !== 'string') {
      return false;
    }

    return ignoredWarnings.some((ignoredWarning) => {
      return arg.includes(ignoredWarning);
    });
  });
}

if (__DEV__) {
  const _warn = console.warn;
  console.warn = function (...args: any[]) {
    if (isWarnIgnored(...args)) {
      return;
    }
    _warn(...args);
  };

  YellowBox.ignoreWarnings(ignoredWarnings);
}

AppRegistry.registerComponent(appName, () => App);
