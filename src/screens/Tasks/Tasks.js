import React from 'react-native';

const {
    Component,
    StyleSheet,
    ScrollView,
    View
    } = React;

import Create from './../Create/Create';
import NavigationFlag from './../../components/NavigationFlag';
import Check from './Types/Check';
import Timer from './Types/Timer';

import { swipeSize } from './../../styles';
import { state } from './initialState';

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
      tasks: state
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
            {this.state.tasks.map(task => task.type == 'check' ?
                <Check task={task} key={task.id}/> :
                <Timer task={task} key={task.id}/>
            )}
          </View>


        </ScrollView>
    );
  }
}