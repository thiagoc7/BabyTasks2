import React from 'react-native';

const {
    Component,
    Dimensions,
    PropTypes,
    StyleSheet,
    View,
    } = React;

import { mainColor } from './../styles';

let { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColor,
    width: width * 0.98,
    height: 100,
    margin: 2.5
  }
});

export default class Check extends Component {

  render() {
    return (
        <View style={styles.container}>
          {this.props.children}
        </View>
    )
  }
}

Check.propTypes = {
  children: PropTypes.any.isRequired
};