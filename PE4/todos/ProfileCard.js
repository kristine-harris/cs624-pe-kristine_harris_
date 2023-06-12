import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

class ProfileCard extends Component {
    render() {
      return (
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./assets/user.png')} />
          </View>
          <View>
            <Text style={styles.cardName}>John Doe</Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>React Native Developer</Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS.
            </Text>
          </View>
        </View>
      );
    }
  }

  export default class App extends Component {
    render() {
      return (
        <ScrollView contentContainerStyle={styles.galleryContainer}>
          <ProfileCard />
            <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
                <Image style={styles.cardImage} source={require('./assets/user.png')} />
            </View>
            <View>
                <Text style={styles.cardName}>Stacey Williams</Text>
            </View>
            <View style={styles.cardOccupationContainer}>
                <Text style={styles.cardOccupation}>React Native Developer</Text>
            </View>
            <View>
                <Text style={styles.cardDescription}>
                Stacey is a really great JavaScript developer. She loves using JS to build React Native applications for iOS.
                </Text>
            </View>
           </View>
            <ProfileCard />
            <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
                <Image style={styles.cardImage} source={require('./assets/user.png')} />
            </View>
           <View>
                <Text style={styles.cardName}>Todd Danner</Text>
            </View>
            <View style={styles.cardOccupationContainer}>
             <Text style={styles.cardOccupation}>React Native Developer</Text>
            </View>
            <View>
             <Text style={styles.cardDescription}>
                 Todd is a really great JavaScript developer. He loves using JS to build React Native applications for iOS.
                </Text>
            </View>
           </View>
          <ProfileCard />
        </ScrollView>
      );
    }
  }