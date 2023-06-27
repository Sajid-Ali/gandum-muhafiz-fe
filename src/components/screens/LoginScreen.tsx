import React, {FC, ReactElement, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from '../../styles/login-style';
import Loader from '../common/Loader';
import {fetchAPI} from '../../services/ApiUtils';

export const LoginScreen: FC<{}> = ({}): ReactElement => {
  const [loader, setLoader] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  async function doUserLogIn(): Promise<void> {
    try {
      setLoader(true);
      const payload = JSON.stringify({password: password, email: username});
      const response = await fetchAPI({
        payload,
        method: 'POST',
        route: 'retailer/login',
      });
      if (response?.user) {
        navigation.navigate('Home');
        await AsyncStorage.setItem(
          'currentUser',
          JSON.stringify(response?.user),
        );
      } else {
        Alert.alert('Failed to authenticate user, please try again.');
      }
      setLoader(false);
    } catch (error) {
      console.log('>>> ERROR LOGIN <<<:', error);
      Alert.alert('Failed to authenticate user, please try again.');
      setLoader(false);
    }
  }

  return (
    <SafeAreaView style={styles.login_container}>
      {loader && <Loader />}
      <View style={styles.login_header}>
        <Image
          style={styles.login_header_logo}
          source={require('../../assets/images/welcome.jpg')}
        />
        <Text style={styles.login_header_text}>
          <Text style={styles.login_header_text_bold}>
            {'Gandum Muhafiz App - '}
          </Text>
          {' User login'}
        </Text>
      </View>
      {/* ------------- */}
      <View style={styles.login_wrapper}>
        <View style={styles.form}>
          <TextInput
            style={styles.form_input}
            value={username}
            placeholder={'Username/email'}
            onChangeText={text => setUsername(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.form_input}
            value={password}
            placeholder={'Password'}
            secureTextEntry
            onChangeText={text => setPassword(text)}
            placeholderTextColor="#000"
          />
          <TouchableOpacity
            onPress={() => doUserLogIn()}
            disabled={!password && !username}>
            <View
              style={[
                styles.button,
                (!password || !username) && {backgroundColor: 'gray'},
              ]}>
              <Text style={styles.button_label}>{'Sign in'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
