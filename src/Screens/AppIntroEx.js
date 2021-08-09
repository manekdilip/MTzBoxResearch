import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../images/images1.jpeg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../images/images2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../images/images3.jpeg'),
    backgroundColor: '#22bcb5',
  },
];

export default class AppIntroEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderItem = ({item}) => {
    return (
      <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
