import React, {useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

import styles from '../../styles/login-style';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

export const AddUserScreen: React.FC = () => {
  const [cnic, setIdValue] = useState('');
  const camera = useRef<Camera>(null);
  const [cameraDevices]: any = useCameraDevices('wide-angle-camera');

  const openCamera = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission === 'authorized') {
      try {
        // Access the photo data
        if (camera?.current) {
          const photo: any = await camera.current.takePhoto({
            qualityPrioritization: 'quality',
            flash: 'on',
            enableAutoRedEyeReduction: true,
          });
          const photoData: any = photo.base64;
          console.log('Photo data:', photoData);
          // Perform further processing or save the photo data as needed
        }
      } catch (error) {
        console.log('Error taking photo:', error);
      }
    }
    console.log('🚀 ~ file: ~ cameraPermission:', cameraPermission);
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log('🚀 ~ file:  ~ newCameraPermission:', newCameraPermission);
  };

  const addNewUser = () => {
    console.log('[][][][][]');
  };

  return (
    <>
      <SafeAreaView style={styles.login_container}>
        <View style={styles.login_header}>
          <Image
            style={styles.login_header_logo}
            source={require('../../assets/images/cnid-placeholder.png')}
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
            />
            <TouchableOpacity onPress={() => openCamera()}>
              <View style={styles.button}>
                <Text style={styles.button_label}>{'Take CNIC Photo'}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addNewUser()}>
              <View style={styles.button}>
                <Text style={styles.button_label}>{'Create'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={cameraDevices.device?.id || ''}
          isActive={true}
        />
      </SafeAreaView>
    </>
  );
};
