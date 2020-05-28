/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Apps from './src/App'
import {name as appName} from './app.json';
// import Intro from './src/Scenes/Intro'
import Products from './src/Scenes/Products'
import { Dashboard } from './src/Scenes/Dashboard'

AppRegistry.registerComponent(appName, () => Apps);
