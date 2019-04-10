import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
// import {Surface} from 'react-360-web';
//
// const myCylinderSurface = new Surface(
//   1000, /* width */
//   600, /* height */
//   Surface.SurfaceShape.Cylinder /* shape */
// );

class node extends React.Component {
  state = {
    title: "Welcome to philosophy stuff",
  };

  changeTitle = () => {
    this.setState({title: "ok I'm different now"});
    // var win = window.open("https://www.google.com/", "_blank");
    // win.focus();
    window.open('https://google.com', '_blank');
    // NativeModules.LinkingManager.openURL('https://google.com')
  };

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <VrButton onClick={this.changeTitle}>
            <Text style={styles.greeting}>
              {`${this.state.title}`}
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    // transform: [{translate: [200, 100, -500]}],
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

export default node;
