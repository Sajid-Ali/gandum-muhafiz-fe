import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import styles from '../../styles/add-user-style';
import Header from '../common/Header';

export const AddUserScreen: React.FC = () => {
  const [cnic, setIdValue] = useState('');
  const [quantity, setQuantity] = useState('');

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

  const addNewUser = () => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header title={'Add User'} />
        <View style={styles.login_header}>
          <Image
            style={styles.login_header_logo}
            resizeMode="cover"
            source={
              base64Image
                ? {uri: `${base64Image}`}
                : require('../../assets/images/cnid-placeholder.png')
            }
          />
        </View>
        {/* ------------- */}
        <View style={styles.login_wrapper}>
          <View style={styles.form}>
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
              value={quantity}
              placeholder={'Enter quantity here...'}
              onChangeText={text => setQuantity(text)}
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
