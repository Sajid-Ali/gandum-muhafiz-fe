import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import styles from '../../styles/add-user-style';
import Header from '../common/Header';
import {fetchAPI} from '../../services/ApiUtils';
import Loader from '../common/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddUserScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [cnic, setIdValue] = useState('');
  const [members, setMembers] = useState('');
  const [loader, setLoader] = useState(false);

  const camera = useRef<Camera>(null);
  const [cameraPermission, setCameraPermission] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<any>();
  const navigation = useNavigation();

  const devices = useCameraDevices();
  const cameraDevice = devices.back;

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);

  function bolbToBase64(bolb: Blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(bolb);
    });
  }

  const handleTakePhoto = async () => {
    try {
      const photo = await camera?.current?.takePhoto({
        skipMetadata: true,
        flash: 'auto',
      });
      if (photo !== null) {
        const photoResppnse = await fetch(`file://${photo?.path}`);
        const bolbData = await photoResppnse.blob();
        const base64 = await bolbToBase64(bolbData);
        setBase64Image(base64 || null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const renderTakingPhoto = () => {
    if (cameraDevice == null) {
      return <ActivityIndicator size="large" color="#1C6758" />;
    }
    if (cameraPermission !== 'authorized') {
      return null;
    }
    return (
      <>
        <Camera
          ref={camera}
          style={[styles.camera, styles.photoAndVideoCamera]}
          device={cameraDevice}
          isActive
          photo
        />
        <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
          <Text style={styles.button_label}>Take Photo</Text>
        </TouchableOpacity>
      </>
    );
  };

  async function addNewUser(): Promise<void> {
    try {
      const currentUser = await AsyncStorage.getItem('currentUser');
      const data = currentUser && JSON.parse(currentUser);
      setLoader(true);
      const payload = JSON.stringify({
        name,
        members,
        CNIC: cnic,
        area: data?.location || '',
      });
      const response = await fetchAPI({
        payload: payload,
        method: 'POST',
        route: 'users',
      });
      if (response?.user) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Failed to create user, try again.');
      }
      setLoader(false);
    } catch (error) {
      console.log('>>> ERROR LOGIN <<<:', error);
      Alert.alert('Failed to create user, try again.');
      setLoader(false);
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header title={'Add User'} />
        {loader && <Loader />}
        {base64Image && (
          <View style={styles.login_header}>
            <Image
              style={styles.login_header_logo}
              resizeMode="cover"
              source={
                base64Image
                  ? {uri: `${base64Image}`}
                  : require('../../assets/images/cnid-placeholder.jpg')
              }
            />
          </View>
        )}
        {/* ------------- */}
        <View style={styles.login_wrapper}>
          <View style={styles.form}>
            <TextInput
              style={styles.form_input}
              value={name}
              placeholder={'Enter name here...'}
              onChangeText={text => setName(text)}
              autoCapitalize={'none'}
              keyboardType={'default'}
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.form_input}
              value={cnic}
              placeholder={'Enter CNIC here...'}
              onChangeText={text => setIdValue(text)}
              autoCapitalize={'none'}
              keyboardType={'default'}
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.form_input}
              value={members}
              placeholder={'Enter members here...'}
              onChangeText={text => setMembers(text)}
              autoCapitalize={'none'}
              keyboardType={'number-pad'}
              placeholderTextColor="#000"
            />
            {!base64Image && renderTakingPhoto()}
            {base64Image && (
              <TouchableOpacity onPress={() => addNewUser()}>
                <View style={styles.button}>
                  <Text style={styles.button_label}>{'Create'}</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
