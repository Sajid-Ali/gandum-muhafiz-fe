import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import Button from '../../components/common/Button';
import {useNavigation} from '@react-navigation/native';

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const handleAdminButtonPress = async () => {
    navigation.navigate('Login');
  };

  const handleUserButtonPress = async () => {
    navigation.navigate('Retailers');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/welcome.jpg')}
        style={styles.backgroundImage}>
        <View style={[styles.container, styles.overlay]}>
          <View></View>
          <View>
            <View>
              {/* <Text style={styles.textStyle}>FOOD</Text>
              <Text style={styles.textStyle}>TRAVELLED</Text>
              <Text style={styles.textStyle}>FOR YOU.</Text> */}
              <Text style={styles.textStyle}>Re-distribute</Text>
              <Text style={styles.textStyle}>Reprocess</Text>
              <Text style={styles.textStyle}>Feed hungry people.</Text>
            </View>
            <View style={{marginTop: 30}}>
              <Text style={styles.description}>
                Set exact location to find the right
              </Text>
              <Text style={styles.description}>food retailer near you</Text>
            </View>
          </View>
          <View>
            <View style={{marginBottom: 50}}>
              <Button
                title="Login To System"
                onPress={handleAdminButtonPress}
              />
              <Button
                title="Find Nearby Retailer"
                onPress={handleUserButtonPress}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  textStyle: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
  },
  description: {
    color: '#fff',
    fontSize: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 30,
  },
});
