/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Intro from './src/Scenes/Intro'
import Home from './src/Scenes/Home'

AppRegistry.registerComponent(appName, () => Home);
