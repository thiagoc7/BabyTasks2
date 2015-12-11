import React, {
    Component,
    PropTypes,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import styles from './styles'

export default class NavBar extends Component {

  render() {
    return (
        <View style={styles.navBarContainer}>
          <View style={styles.statusBar} />
          <View style={styles.navBar}>
            <Text style={styles.navBarTitleText}>
              Segunda, 05 de janeiro
            </Text>
          </View>
        </View>
    )
  }
}
