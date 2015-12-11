import React from 'react-native';

const {
    Component,
    StyleSheet,
    ScrollView,
    Text,
    View
    } = React;

import Create from './../Create/Create';
import NavigationFlag from './../../components/NavigationFlag';

import { swipeSize } from './../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    top: -40
  }
});

export default class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yOffset: 0,
    }
  }

  onScroll(e) {
    this.setState({yOffset: e.nativeEvent.contentOffset.y});
  }

  handleRouting() {
    if (this.state.yOffset < -swipeSize) {
      this.props.navigator.push({
        component: Create
      })
    }
  }

  render() {
    return (
        <ScrollView
            style={{ flex: 1 }}
            onScroll={this.onScroll.bind(this)}
            onMomentumScrollBegin={this.handleRouting.bind(this)}
            scrollEventThrottle={16}>

          <NavigationFlag style={{height: 40, top: -60}} offset={this.state.yOffset}>
            +
          </NavigationFlag>

          <View style={styles.container}>
            <Text style={{color: '#fff'}}>Tasks</Text>
          </View>


        </ScrollView>
    );
  }
}