import React from 'react-native';

const {
    Component,
    PropTypes,
    Text,
    } = React;

import TaskContainer from './../../../components/TaskContainer'

export default class Check extends Component {

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

Check.propTypes = {
  task: PropTypes.object.isRequired
};