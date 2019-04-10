import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  asset,
  AmbientLight,
  PointLight,
  NativeModules,
  Canvas,
} from 'react-360';
import {Surface} from 'react-360-web';
import node from './node';
import Entity from 'Entity';

// const myCylinderSurface = new Surface(
//   1000, /* width */
//   600, /* height */
//   Surface.SurfaceShape.Cylinder /* shape */
// );
const textStuff = "Welcome yadda yadda";

export default class vr extends React.Component {
  state = {
    title: "Welcome to philosophy stuff",
  };

  changeTitle = () => {
    this.setState({title: "ok I'm different now"});
    NativeModules.LinkingManager.openURL('https://en.wikipedia.org/wiki/Scientific_realism')
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

export class anode extends React.Component {
  render() {
    return (
      <View style={styles.panel2}>
      </View>
    );
  }
};

export class entitty extends React.Component {
  render() {
    return (
      <View>
        <Entity
          source={{obj: asset('./eb_house_plant_01.obj'),
          mtl: asset('./eb_house_plant_01.mtl')}}
          style={{
            transform: [
              {translate: [0, 0, 0]},
              {scale: 5}
            ]
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    // transform: [{translate: [-200, -100, 500]}],
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel2: {
    // Fill the entire surface
    // transform: [{translate: [-200, -100, 500]}],
    width: 1000,
    height: 600,
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

AppRegistry.registerComponent('vr', () => vr);
AppRegistry.registerComponent('anode', () => anode);
AppRegistry.registerComponent('node', () => node);
