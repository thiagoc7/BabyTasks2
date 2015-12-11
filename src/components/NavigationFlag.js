import React from 'react-native';

const {
    Animated,
    Component,
    PropTypes,
    StyleSheet,
    Text,
    } = React

import { mainColor, swipeSize, swipeFontSize, swipeOpacityReducer } from './../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  text: {
    color: mainColor,
    fontSize: swipeFontSize
  }
});

export default class NavigationFlag extends Component {

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.offset != nextProps.offset) {
      this.state.opacity.setValue(nextProps.offset / -swipeSize - swipeOpacityReducer)
    }
  }

  render() {
    return (
        <Animated.View style={[styles.container, {opacity: this.state.opacity}, this.props.style && this.props.style]}>
          <Text style={styles.text}>
            {this.props.children}
          </Text>
        </Animated.View>
    )
  }
}

NavigationFlag.propTypes = {
  children: PropTypes.any.isRequired,
  offset: PropTypes.number.isRequired,
  style: PropTypes.object
};