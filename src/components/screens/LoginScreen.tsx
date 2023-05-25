import React, {FC, ReactElement, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

import styles from '../../styles/login-style';

export const LoginScreen: FC<{}> = ({}): ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation();

  const doUserLogIn = async function (): Promise<boolean> {
    // Note that this values come from state variables that we've declared before
    const usernameValue: string = username;
    console.log('🚀 ~  ~ usernameValue:', usernameValue);
    const passwordValue: string = password;
    console.log('🚀 ~  ~ passwordValue:', passwordValue);
    return true;
  };

  return (
    <>
      <SafeAreaView style={styles.login_container}>
        <View style={styles.login_header}>
          <Image
            style={styles.login_header_logo}
            source={require('../../assets/images/welcome.png')}
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
              placeholder={'Username'}
              onChangeText={text => setUsername(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
            <TextInput
              style={styles.form_input}
              value={password}
              placeholder={'Password'}
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={() => doUserLogIn()}>
              <View style={styles.button}>
                <Text style={styles.button_label}>{'Sign in'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
