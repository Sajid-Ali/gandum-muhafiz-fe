import React, {FC} from 'react';
import {View, Modal, StyleSheet, ActivityIndicator} from 'react-native';

const Loader: FC = () => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={true}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={true} size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loader_container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 200,
    width: 200,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
