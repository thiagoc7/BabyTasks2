import React from 'react-native';

const {
    Component,
    PropTypes,
    Text,
    } = React;

import TaskContainer from './../../../components/TaskContainer'

export default class Timer extends Component {

  render() {
    return (
        <TaskContainer>
          <Text>
            {this.props.task.name}
          </Text>
        </TaskContainer>
    )
  }
}

Timer.propTypes = {
  task: PropTypes.object.isRequired
};