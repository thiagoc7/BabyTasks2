import React from 'react-native';
const {
    Component,
    Navigator,
    StatusBarIOS,
    View
    } = React;

import Tasks from './screens/Tasks/Tasks';
import NavBar from './components/Navbar/NavBar';

import { backgroundColor, statusBarStyle } from './styles';

function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

export default class App extends Component {
  componentWillMount() {
    StatusBarIOS.setStyle(statusBarStyle);
  }

  render() {
    const initialRoute = {
      component: Tasks
    };

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>

          <NavBar />

          <Navigator
              initialRoute={initialRoute}
              renderScene={renderScene}
              configureScene={() => {
                  return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
          />
        </View>
    );
  }
}